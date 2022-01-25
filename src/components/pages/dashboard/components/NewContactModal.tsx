import { FormEvent } from 'react'
import { useContacts } from '../../../../contexts/ContactsProvider'
import { Modal } from '../../../components/Modal'
import styles from './Modal.module.sass'

export const NewContactModal = ({
  open,
  setOpen
}: {
  open: boolean,
  setOpen: Function
}) => {
  const { createContact } = useContacts()
  const handleCreateContact = (event: FormEvent) => {
    event.preventDefault()
    const form: HTMLFormElement = event.target as HTMLFormElement
    const formData = new FormData(form)
    const username: string = formData.get('username') as string
    createContact(username.replace(/\s+/g, ''), formData.get('name'))
    form.reset()
    setOpen(false)
  }
  return (
    <Modal
        header='New Contact'
        open={open}
        setOpen={setOpen}>
          <form
            className={styles.form}
            autoComplete='off'
            onSubmit={(event: FormEvent) => handleCreateContact(event)}>
            <input
              className='input'
              name='username'
              minLength={3}
              required
              placeholder='Contact ID'></input>
            <input
              className='input'
              name='name'
              minLength={3}
              required
              placeholder='Nickname'></input>
            <button
              className='button'
              type='submit'>Create Contact</button>
          </form>
      </Modal>
  )
}
