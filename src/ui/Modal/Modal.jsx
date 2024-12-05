import styles from './Modal.module.scss'
import icon_close from '../../assets/reusable_icons/icon-close.png'


const Modal = ({ isOpen, onClose, children }) => {

    if (!isOpen) {
        return null
    }

    return (
        <div onClick={onClose} className={styles.modal}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal_content}>
                <button onClick={onClose} className={styles.modal_button}> <img src={icon_close} alt="icon close" className={styles.icon_close} /> </button>
                {children}
            </div>
        </div>
    )
}

export default Modal

