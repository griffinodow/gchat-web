import { useLocalStorage } from '../hooks/useLocalStorage'
import { Login } from './pages/login/Login'
import { Dashboard } from './pages/dashboard/Dashboard'
import './style.sass'
import './themes.sass'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider'
import { SocketProvider } from '../contexts/SocketProvider'

function App () {
  const [username, setUsername] = useLocalStorage('username')
  return (
    <>
      <ContactsProvider>
        { username
          ? (
            <SocketProvider username={username}>
              <ConversationsProvider username={username}>
                <Dashboard username={username}/>
              </ConversationsProvider>
            </SocketProvider>)
          : <Login onUsernameSubmit={setUsername}/> }
      </ContactsProvider>
    </>
  )
}

export default App
