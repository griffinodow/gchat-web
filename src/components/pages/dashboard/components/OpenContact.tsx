import { useContacts } from '../../../../contexts/ContactsProvider'
import styles from './OpenContact.module.sass'

export const OpenContact = () => {
  const { contacts, selectedContact } = useContacts()

  return (
    <div className={styles.center}>
      <p>{contacts &&
            contacts[selectedContact] && contacts[selectedContact].name}</p>
      <p>{contacts &&
            contacts[selectedContact] && contacts[selectedContact].username}</p>
    </div>
  )
}
