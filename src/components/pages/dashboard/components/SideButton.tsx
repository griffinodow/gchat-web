import styles from './SideButton.module.sass'

export const SideButton = ({
  text,
  active,
  onClick
}: {
  text: string,
  active?: boolean,
  onClick?: Function }) => {
  return (
    onClick
      ? <button
          className={active ? styles.active : styles.button}
          onClick={() => onClick(text)}>
            {text}
        </button>
      : <button
          className={active ? styles.active : styles.button}>
            {text}
        </button>
  )
}
