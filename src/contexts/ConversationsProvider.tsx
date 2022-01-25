import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useCallback
} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useSocket } from './SocketProvider'

interface IConversation {
  recipients: Array<string>
  messages: any
}

interface IContextProps {
  conversations: Array<IConversation>
  createConversation: Function
  selectedConversation: number
  setSelectedConversation: Function
  sendMessage: Function
}

const ConversationsContext = createContext({
  conversations: [],
  createConversation: () => {},
  selectedConversation: 0,
  setSelectedConversation: () => {},
  sendMessage: () => {}
} as IContextProps)

export const useConversations = () => useContext(ConversationsContext)

export const ConversationsProvider = (
  { children, username }: { children?: ReactNode, username: string }) => {
  const [
    conversations,
    setConversations] = useLocalStorage('conversations', [])
  const [selectedConversation, setSelectedConversation] = useState(0)
  const socket = useSocket()

  const createConversation = (recipients: Array<string>) => {
    setConversations((prev: Array<IConversation>) =>
      [...prev, { recipients, messages: [] }])
  }

  const addMessageToConversation = useCallback(({
    recipients,
    text,
    sender
  }: {
    recipients: Array<string>,
    text: string,
    sender: string
  }) => {
    setConversations((prev: Array<IConversation>) => {
      let madeChange = false
      const newMessage = { sender, text }
      const newConversations = prev.map((conv) => {
        if (arrayEquality(conv.recipients, recipients)) {
          madeChange = true
          return {
            ...conv,
            messages: [...conv.messages, newMessage]
          }
        }
        return conv
      })
      if (madeChange) {
        return newConversations
      } else {
        return [...prev, { recipients, messages: [newMessage] }]
      }
    })
  }, [setConversations])

  useEffect(() => {
    if (!socket) return
    socket.on('recieve-message', addMessageToConversation)
    return () => { socket.off('recieve-message') }
  }, [socket, addMessageToConversation])

  const sendMessage = (recipients: Array<string>, text: string) => {
    if (!socket) return
    socket.emit('send-message', { recipients, text })
    addMessageToConversation({ recipients, text, sender: username })
  }

  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        sendMessage,
        createConversation,
        selectedConversation,
        setSelectedConversation
      }}>
        {children}
    </ConversationsContext.Provider>
  )
}

const arrayEquality = (a: Array<string>, b: Array<string>) => {
  if (a.length !== b.length) return false
  a.sort()
  b.sort()

  return a.every((element, index) => element === b[index])
}
