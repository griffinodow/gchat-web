import { useContacts } from '../../../../contexts/ContactsProvider'
import { useConversations } from '../../../../contexts/ConversationsProvider'
import styles from './OpenConversation.module.sass'

export const Message = ({
  index,
  sender,
  message
}: {
  index: number,
  sender: string,
  message: {
    sender: string
    text: string
  }
}) => {
  const { conversations, selectedConversation } = useConversations()
  const { contacts } = useContacts()
  const conversation = conversations[selectedConversation]
  const isSender = sender === message.sender
  const nonSender = contacts.find((value) => value.username === message.sender)
  const display = nonSender
    ? nonSender.name
    : `${message.sender.substring(0, 3)} ${message.sender.substring(3, 6)}`

  return (
    <div>
      {
        (index === 0 ||
          conversation.messages[index - 1].sender !==
          conversation.messages[index].sender) && (
          <div className={`
            ${styles.name}
            ${message.sender === sender ? styles.right : ''}`}>
              {isSender ? 'You' : display }
          </div>
        )
      }
      <div className={message.sender === sender ? styles.right : ''}>
        <div className={`${styles.message}`}>
          {`${message.text}`}
        </div>
      </div>
    </div>
  )
}
