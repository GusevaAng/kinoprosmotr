import styles from './ButtonCategory.module.scss'


const ButtonCategory = ({onClick, name, isActive}) => {
    return (
        <button onClick={onClick} className={`${styles.button_category} ${isActive ? styles.active : ''}`}>
            <span className={styles.button_name}> {name} </span>
        </button>
    )
}

export default ButtonCategory