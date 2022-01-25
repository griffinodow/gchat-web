import {
  useContext,
  createContext,
  useEffect,
  useState,
  ReactNode
} from 'react'
import io, { Socket } from 'socket.io-client'

type ISocketParams = Socket | undefined

const SocketContext = createContext({} as ISocketParams)

export const useSocket = () => {
  return useContext(SocketContext)
}

export const SocketProvider = ({
  username,
  children
}: { username: string, children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const newSocket = io('https://api.g-chat.griffindow.com/', { query: { username } })
    setSocket(newSocket)
    return () => { newSocket.close() }
  }, [username])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
