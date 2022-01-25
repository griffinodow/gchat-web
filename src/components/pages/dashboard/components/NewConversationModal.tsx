import { FormEvent, useState } from 'react'
import { Modal } from '../../../components/Modal'
import { useContacts } from '../../../../contexts/ContactsProvider'
import { useConversations } from '../../../../contexts/ConversationsProvider'
import styles from './Modal.module.sass'

export const NewConversationModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  const { contacts } = useContacts()
  const { createConversation } = useConversations()
  const [
    selectedContactUsernames,
    setSelectedContactUsernames
  ] = useState<Array<string>>([] as Array<string>)

  const handleCheckboxChange = (username: string) => {
    setSelectedContactUsernames((prev) => (
      prev.includes(username)
        ? prev.filter((value) => value !== username)
        : [...prev, username]
    ))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    createConversation(selectedContactUsernames)
    form.reset()
    setOpen(false)
  }

  return (
    <Modal
      header='New Conversation'
      open={open}
      setOpen={setOpen}>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className={styles.form}>
            { contacts.map((contact) => (
              <section className={styles.padded} key={contact.username}>
                <input
                  type='checkbox'
                  name={contact.username}
                  onChange={() => handleCheckboxChange(contact.username)}
                  value={String(selectedContactUsernames
                    .includes(contact.username))
                  }></input>
                <label>{contact.name}</label>
              </section>
            )) }
          <section>
            <button className='button' type='submit'>Create</button>
          </section>
        </form>
    </Modal>
  )
}
