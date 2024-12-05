import styles from './MoreAboutFilm.module.scss'
import FilmDescription from './FilmDescription/FilmDescription'
import CastAndCrew from './CastAndCrew/CastAndCrew'
import SimilarFilms from './SimilarFilms/SimilarFilms'
import InterestingFacts from './InterestingFacts/InterestingFacts'
import UserReviews from './UserReviews/UserReviews'


const MoreAboutFilm = () => {
    return (
        <div className={styles.film_page}>
            <FilmDescription />
            <CastAndCrew />
            <InterestingFacts />
            <UserReviews />
            <SimilarFilms />
        </div>
    )
}

export default MoreAboutFilm