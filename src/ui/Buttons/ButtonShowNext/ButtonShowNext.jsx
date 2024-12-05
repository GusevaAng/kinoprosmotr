import styles from './ButtonShowNext.module.scss'
import arrow_next from '../../../assets/reusable_icons/next-arrow.png'


const ButtonShowNext = ({onClick}) => {

    return (
        <button onClick={onClick} className={styles.button_next}>
            <img src={arrow_next} alt="arrow next" className={styles.arrow_next} />
        </button>
    )
}

export default ButtonShowNext