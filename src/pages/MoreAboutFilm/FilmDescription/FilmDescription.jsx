import { useContext, useEffect } from 'react' 
import styles from './FilmDescription.module.scss'
import { StoreContext } from '../../../store/root'
import { useParams } from 'react-router-dom'
import clock_icon from '../../../assets/more_about_film/clock-icon.png'
import age_icon from '../../../assets/more_about_film//age-icon.png'
import { observer } from 'mobx-react'


const FilmDescription = (observer(() => {
    
    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])


    const parameterId = useParams()
    const filmId = parseInt(parameterId.id)
    const currentFilm = movies?.docs?.find(i => i.id === filmId)


    const durationTime = () => {
        if (currentFilm?.isSeries) {            
            return (
                <span> {currentFilm?.seriesLength}м </span>
            )
        } else {
            let movieLength = currentFilm?.movieLength
            let minutes = movieLength % 60
            let hours = (movieLength - minutes) / 60
            return (
                <span> {hours}ч {minutes}м </span>
            )
        }
    }
    // @TODO обернуть в UseMemo
    const genres = currentFilm?.genres?.map(genre => {
        return (
            <span key={genre.name} className={styles.genre}> {genre.name} </span>
        )
    })


    return (
        <div className={styles.container}>
            <div className={styles.background} style={ {backgroundImage: `url(${currentFilm?.backdrop?.url})`} }>
                <div className={styles.film_description}>
                    <img src={currentFilm?.poster?.url} alt="poster" className={styles.poster} />
                    <div className={styles.wrapper}>
                        <div className={styles.header}>
                            <span className={styles.year}> {currentFilm?.year} </span>
                            <img src={clock_icon} alt="clock icon" className={styles.clock_icon} />
                            <div className={styles.duration_time}> {durationTime()} </div>
                            <img src={age_icon} alt="age icon" className={styles.age_icon} />
                            <span className={styles.age_rating}> {currentFilm?.ageRating === null ? '0' : `${currentFilm?.ageRating}`}+ </span>
                        </div>
                        <div className={styles.info_section}>
                            <h2 className={styles.name}> {currentFilm?.name} </h2>
                            <p className={styles.slogan}> {currentFilm?.slogan} </p>
                            <p className={styles.description}> {currentFilm?.description} </p>
                        </div>
                        <div className={styles.genres}>
                            <h4 className={styles.genres_title}> Жанры: </h4>
                            <div className={styles.genres_blocks}> {genres} </div>
                        </div>
                        <div className={styles.rating}>
                            <h4 className={styles.rating_title}> Рейтинг: </h4>
                            <span className={styles.rating_blocks}> {currentFilm?.rating?.imdb} IMDb </span>
                            <span className={styles.rating_blocks}> {currentFilm?.rating?.kp} KP </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}))

export default FilmDescription