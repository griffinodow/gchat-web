import { useContacts } from '../../../../contexts/ContactsProvider'
import styles from './Contacts.module.sass'

export const Contacts = () => {
  const { contacts, selectedContact, setSelectedContact } = useContacts()
  return (
    <div>
      { contacts.map((contact, index) => (
        <div key={contact.username}>
          <button
            onClick={() => setSelectedContact(index)}
            className={`
              ${styles.contact}
              ${contacts[selectedContact].username === contact.username
                ? styles.active
                : ''}
          `}>{contact.name}</button>
        </div>
      )) }
    </div>
  )
}
