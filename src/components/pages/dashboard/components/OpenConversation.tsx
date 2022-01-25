import { FormEvent, useState } from 'react'
import { useConversations } from '../../../../contexts/ConversationsProvider'
import { Message } from './Message'
import styles from './OpenConversation.module.sass'

export const OpenConversation = ({ username }: { username: string }) => {
  const [text, setText] = useState('')
  const {
    conversations,
    sendMessage,
    selectedConversation
  } = useConversations()
  const conversation = conversations[selectedConversation]

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    sendMessage(conversations[selectedConversation].recipients, text)
    setText('')
  }

  return (
    <div className={styles.conversation}>
      <section className={styles.chatwrapper}>
        { !conversations[selectedConversation]
          ? <p className={styles.center}>
              Add a contact on the left then create a conversation</p>
          : <div className={styles.chat}>
          { conversation &&
            conversation.messages
              .map((message: { sender: string, text: string },
                index: number) => (
                  <Message
                    key={index}
                    index={index}
                    sender={username}
                    message={message}/>
              ))
          }
          </div> }
      </section>
      <section>
        { conversations[selectedConversation] &&
          (
            <form
              className={styles.submit}
              onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='message'
                value={text}
                onChange={(event) => setText(event.target.value)}></input>
              <button type='submit'>Send</button>
            </form>
          ) }
      </section>
    </div>
  )
}
