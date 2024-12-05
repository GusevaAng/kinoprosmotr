import styles from './CardCategoryFilms.module.scss'
import Rating from '@mui/material/Rating'
import Favorites from '../../../../ui/Buttons/Favorites/Favorites'
import { Link } from 'react-router-dom'
import Tooltip from '../../../../ui/Tooltip/Tooltip'


const CardCategoryFilms = (props) => {

    const durationTime = () => {
        let movieLength = props.durationTime
        let minutes = movieLength % 60
        let hours = (movieLength - minutes) / 60
        return (
            <span> {hours}ч {minutes}м </span>
        )
    }

    const roundedFees = !isNaN(parseFloat(props.fees)) ? Math.round(props.fees / 1000000) : null


    return (
        <div key={props.id} className={styles.card}>
            <img src={props.poster} alt="poster" className={styles.poster} />
            <Link to={`/film/${props.id}`} className={styles.info_section} >
                <Tooltip content={props.shortDescription}>
                    <h4 className={styles.name}> {props.name} </h4>
                </Tooltip>
                <div className={styles.brief_info}>
                    <span> {props.countries}  </span>
                    <span> · {props.year} г. </span>
                    <span> · {durationTime()} </span>
                    {props.ageRating !== null && (
                        <span> · {props.ageRating}+ </span>
                    )}
                </div>
                <p className={styles.genres}> {props.genres} </p>
                {roundedFees !== null && (
                    <p className={styles.fees}> Мировые сборы: {roundedFees} млн. $ </p>
                )}
            </Link>
            <div className={styles.rating_block}>
                <Rating 
                    name="read-only"
                    value={(props.rating) / 2}  
                    precision={0.5}
                    size='large'
                    readOnly
                />
                <p className={styles.rating}> {props.rating} imdb </p>
            </div>
            <Favorites 
                name={props.name}
                id={props.id}
            />
        </div>
    )
}

export default CardCategoryFilms