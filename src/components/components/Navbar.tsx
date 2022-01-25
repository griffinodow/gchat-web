import { FaBars } from 'react-icons/fa'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import styles from './Navbar.module.sass'

export const Navbar = ({
  setMobileMenuHidden
}: {
  setMobileMenuHidden: Function }) => {
  const handleMenuClick = () => {
    setMobileMenuHidden()
  }
  const [,, deleteUsername] = useLocalStorage('username')
  const [,, deleteContacts] = useLocalStorage('contacts')
  const [,, deleteConversations] = useLocalStorage('conversations')

  const handleLogout = () => {
    deleteConversations()
    deleteContacts()
    deleteUsername()
    window.location.reload()
  }
  return (
    <div className={styles.navbar}>
      <FaBars size={24} onClick={handleMenuClick} className={styles.mobile}/>
      <p className={styles.desktop}><strong>G-CHAT</strong></p>
      <p>
        <button
          onClick={handleLogout}
          className={styles.logout}>Logout</button>
      </p>
    </div>
  )
}
