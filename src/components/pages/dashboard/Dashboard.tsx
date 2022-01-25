import { useState } from 'react'
import { SideBar } from './components/SideBar'
import { Navbar } from '../../components/Navbar'
import { NewContactModal } from './components/NewContactModal'
import { NewConversationModal } from './components/NewConversationModal'
import styles from './Dashboard.module.sass'
import { Contacts } from './components/Contacts'
import { Conversations } from './components/Conversations'
import { OpenConversation } from './components/OpenConversation'
import { OpenContact } from './components/OpenContact'

export const Dashboard = ({ username }: { username: string }) => {
  const [tab, setTab] = useState('Messages')
  const [mobileMenuHidden, setMobileMenuHidden] = useState(true)
  const [newMessageModelOpen, setNewMessageModalOpen] = useState(false)
  const [addContactModelOpen, setAddContactModelOpen] = useState(false)
  return (
    <>
      <Navbar
        setMobileMenuHidden={() => setMobileMenuHidden(prev => !prev)}/>
      <section className={styles.content}>
        <SideBar
          tab={tab}
          setTab={setTab}
          hidden={mobileMenuHidden}
          username={username}
          setNewMessageModalOpen={setNewMessageModalOpen}
          setAddContactModalOpen={setAddContactModelOpen}>
          { tab === 'Contacts' ? <Contacts/> : <Conversations/> }
        </SideBar>
        {
          tab === 'Messages'
            ? <OpenConversation username={username}/>
            : <OpenContact/>
        }
      </section>
      <NewConversationModal
        open={newMessageModelOpen}
        setOpen={setNewMessageModalOpen}/>
      <NewContactModal
        open={addContactModelOpen}
        setOpen={setAddContactModelOpen}/>
      </>
  )
}
