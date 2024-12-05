import { useContext, useEffect, useState } from 'react' 
import styles from './CategoryGenres.module.scss'
import { StoreContext } from '../../../store/root'
import icon_fantasy from '../../../assets/genre_images/icon-fantasy.png'
import icon_drama from '../../../assets/genre_images/icon-drama.png'
import icon_comedy from '../../../assets/genre_images/icon-comedy.png'
import icon_adventure from '../../../assets/genre_images/icon-adventure.png'
import icon_western from '../../../assets/genre_images/icon-western.png'
import icon_family from '../../../assets/genre_images/icon-family.png'
import icon_melodrama from '../../../assets/genre_images/icon-melodrama.png'
import icon_crime from '../../../assets/genre_images/icon-crime.png'
import icon_biography from '../../../assets/genre_images/icon-biography.png'
import icon_scifi from '../../../assets/genre_images/icon-scifi.png'
import icon_action from '../../../assets/genre_images/icon-action.png'
import icon_horror from '../../../assets/genre_images/icon-horror.png'
import icon_thriller from '../../../assets/genre_images/icon-thriller.png'
import icon_war from '../../../assets/genre_images/icon-war.png'
import icon_history from '../../../assets/genre_images/icon-history.png'
import CardFilmsInGenre from './CardFilmsInGenre/CardFilmsInGenre'
import { observer } from 'mobx-react'


const genreImages = {
    'фэнтези': icon_fantasy,
    'драма': icon_drama,
    'комедия': icon_comedy,
    'приключения': icon_adventure,
    'вестерн': icon_western,
    'семейный': icon_family,
    'мелодрама': icon_melodrama,
    'криминал': icon_crime,
    'биография': icon_biography,
    'фантастика': icon_scifi,
    'боевик': icon_action,
    'ужасы': icon_horror,
    'триллер': icon_thriller,
    'военный': icon_war,
    'история': icon_history,
}

const CategoryGenres = (observer(() => {

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])

    const films = movies?.docs?.filter((film) => film.type === 'movie')
    const allGenres  = [... new Set(films?.flatMap((film) => film.genres.map((genre) => genre.name)))]

    const [ isOpenListFilms, setIsOpenListFilms ] = useState(null)


    return (
        <div className={styles.container}>
            {allGenres?.map((genre) => {
            const filmsInGenre = films?.filter((film) => film.genres.some((g) => g.name === genre))
            
            return (
                <div key={genre} className={styles.genre_card} >
                    <div onClick={() => setIsOpenListFilms(isOpenListFilms === genre ? null : genre)} className={styles.genre_wrapper}>
                        {genreImages[genre] && (
                            <img src={genreImages[genre]} alt="poster" className={styles.genre_img} />
                        )}
                        <p className={styles.genre_title}> {genre} </p>
                    </div>
                    {isOpenListFilms === genre && (
                        <div className={styles.films_in_genre}>
                            {filmsInGenre?.map(film => (
                                <CardFilmsInGenre 
                                    key={film.id}
                                    id={film.id}    
                                    name={film.name}
                                    poster={film.poster.url}
                                    year={film.year}
                                    rating={film.rating?.imdb}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )})}
        </div>
    )
}))

export default CategoryGenres