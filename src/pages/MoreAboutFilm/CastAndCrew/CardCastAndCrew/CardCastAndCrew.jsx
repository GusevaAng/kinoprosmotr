import styles from './CardCastAndCrew.module.scss'


const CardCastAndCrew = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.photo} alt="photo" className={styles.photo} />
            <div className={styles.info_section}>
                <h5 className={styles.name} > {props.name} </h5>
                <p className={styles.description} > {props.description === null ? props.profession.slice(0, -1) : props.description} </p>
            </div>
        </div>
    )
}

export default CardCastAndCrew