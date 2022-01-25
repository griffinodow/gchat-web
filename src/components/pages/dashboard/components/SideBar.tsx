import { SideButton } from './SideButton'
import styles from './SideBar.module.sass'
import { ReactNode } from 'react'
export const SideBar = ({
  username,
  setTab,
  tab,
  hidden,
  setNewMessageModalOpen,
  setAddContactModalOpen,
  children
}: {
  username: string,
  setTab: Function,
  hidden: boolean,
  tab: string,
  setNewMessageModalOpen: Function,
  setAddContactModalOpen: Function,
  children: ReactNode }) => {
  const handleTabClick = (text: string) => {
    if (text === tab) return
    setTab(text)
  }
  return (
    <div className={`${styles.sidebar} ${hidden && styles['side-hide']}`}>
      <section>
        <section className={styles.userbanner}>
          <h3>{`${username.substring(0, 3)} ${username.substring(3, 6)}`}</h3>
        </section>
        <section className={styles.tabs}>
          <SideButton
            active={tab === 'Contacts'}
            text='Contacts'
            onClick={handleTabClick}/>
          <SideButton
            active={tab === 'Messages'}
            text='Messages'
            onClick={handleTabClick}/>
        </section>
        <section>
          {children}
        </section>
      </section>
      <section>
        { tab === 'Contacts'
          ? <SideButton
              text='New Contact'
              onClick={() => setAddContactModalOpen(true)}/>
          : <SideButton
              text='New Conversation'
              onClick={() => setNewMessageModalOpen(true)}/> }
      </section>
    </div>
  )
}
