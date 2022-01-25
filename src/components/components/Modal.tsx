import { ReactNode, MouseEvent, useRef } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import styles from './Modal.module.sass'

export const Modal = ({
  header,
  children,
  open,
  setOpen
}: {
  header: string,
  children?: ReactNode,
  open: boolean,
  setOpen: Function }) => {
  const wrapperRef = useRef(null)
  const handleClickWrapper = (
    event: MouseEvent) => {
    if (event.target !== wrapperRef.current) return
    setOpen(false)
  }
  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${open ? '' : 'hidden'}`}
      onClick={(event) => handleClickWrapper(event)}>
      <div className={styles.modal}>
        <section>
          <h3>{header}</h3>
          <button className={styles.close} onClick={() => setOpen(false)}>
            <MdOutlineClose size={24}/>
          </button>
        </section>
        <section>
          {children}
        </section>
      </div>
    </div>
  )
}
