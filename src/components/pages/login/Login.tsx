import { useRef, FormEvent, MutableRefObject } from 'react'
import styles from './Login.module.sass'

export const Login = ({ onUsernameSubmit }: { onUsernameSubmit: Function }) => {
  const usernameRef = useRef() as MutableRefObject<HTMLInputElement>

  const handleLogin = (event: FormEvent) => {
    event.preventDefault()
    onUsernameSubmit(usernameRef.current.value.trim())
  }

  const handleRegistration = () => {
    const letters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let username = ''
    for (let i = 0; i < 6; i++) {
      username += Math.floor(Math.random() * (2 - 0))
        ? letters[Math.floor(Math.random() * (26 - 0))]
        : Math.floor(Math.random() * (10 - 0))
    }
    onUsernameSubmit(username)
  }

  return (
    <main className={styles.login}>
      <h1>G-CHAT</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <section>
          <input
            className='input'
            type='text'
            ref={usernameRef}
            placeholder='Previous ID'
            minLength={3}
            pattern='^\S+$'
            title='no whitepsace'
            required>
          </input>
        </section>
        <section>
          <button type='submit'>
            Login
          </button>
          <button onClick={handleRegistration}>
            New ID
          </button>
        </section>
      </form>
    </main>
  )
}
