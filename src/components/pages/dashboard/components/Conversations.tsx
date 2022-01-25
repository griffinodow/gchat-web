import { useConversations } from '../../../../contexts/ConversationsProvider'
import { useContacts } from '../../../../contexts/ContactsProvider'
import styles from './Conversations.module.sass'

export const Conversations = () => {
  const {
    conversations,
    selectedConversation,
    setSelectedConversation
  } = useConversations()
  const { contacts } = useContacts()

  return (
    <>
      {
        conversations.map((conversation, index) => {
          const names: Array<string> = []
          conversation.recipients.forEach((recipient) => {
            if (contacts.find) {
              try {
                const result = contacts.find((contact) =>
                  contact.username === recipient).name
                names.push(result)
              } catch {
                names.push(recipient)
              }
            } else {
              names.push(recipient)
            }
          })
          return (
            <div key={index}>
              <button
                onClick={() => setSelectedConversation(index)}
                className={`
                  ${styles.conversation}
                  ${selectedConversation === index && styles.active}`}>
                    {names.join(', ')}
              </button>
            </div>
          )
        })
      }
    </>
  )
}
