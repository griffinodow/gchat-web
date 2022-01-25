import { createContext, ReactNode, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface IContextProps {
  contacts: Array<any>
  createContact: Function
  selectedContact: number
  setSelectedContact: Function
}

const ContactsContext = createContext({
  contacts: [],
  createContact: () => {},
  selectedContact: 0,
  setSelectedContact: () => {}
} as IContextProps)

export const useContacts = () => useContext(ContactsContext)

export const ContactsProvider = ({ children }: { children?: ReactNode }) => {
  const [
    contacts,
    setContacts] = useLocalStorage('contacts', [])
  const [selectedContact, setSelectedContact] = useState(0)
  const createContact = (username: string, name: string) => {
    setContacts((prev: any) => [...prev, { username, name }])
  }
  return (
    <ContactsContext.Provider value={{
      contacts,
      createContact,
      selectedContact,
      setSelectedContact
    }}>
      {children}
    </ContactsContext.Provider>
  )
}
