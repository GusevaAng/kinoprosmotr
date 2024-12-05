import styles from './CardSimilarFilms.module.scss'
import { Link } from 'react-router-dom'


const CardSimilarFilms = (props) => {

    return (
        <div key={props.id} className={styles.card}>
            <div className={styles.background_poster} style={ {backgroundImage: `url(${props.poster})`} }>
                <div className={styles.wrapper}>
                    <Link
                        to={`/film/${props.id}`} 
                        className={styles.film_link}
                    >
                        <p className={styles.film_name}> {props.name} </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardSimilarFilms