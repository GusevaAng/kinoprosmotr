import styles from './CardFilm.module.scss'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import Favorites from '../../../../ui/Buttons/Favorites/Favorites'


const CardFilm = (props) => {

    return (
        <div key={props.id} className={styles.card} >
            <div className={styles.background_poster} style={ {backgroundImage: `url(${props.poster})`} }>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <Link to={`/film/${props.id}`} className={styles.film_link} > 
                            <h4 className={styles.film_name} > {props.name} </h4> 
                        </Link>
                        <div className={styles.rating}>
                            <Rating 
                                name="read-only"
                                value={(props.rating) / 2}  
                                precision={0.5}
                                size='large'
                                readOnly
                            />
                            <h5 className={styles.rating_imdb}> {props.rating} </h5>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <p className={styles.film_genres} > {props.genres} </p>
                        <Favorites 
                            name={props.name}
                            id={props.id}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFilm