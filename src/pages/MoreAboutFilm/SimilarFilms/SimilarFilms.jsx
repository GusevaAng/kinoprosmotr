import { useContext, useEffect, useMemo, useState } from 'react' 
import styles from './SimilarFilms.module.scss'
import { StoreContext } from '../../../store/root'
import { useParams } from 'react-router-dom'
import CardSimilarFilms from './CardSimilarFilms/CardSimilarFilms'
import { DEFAULT_FIRST_SIMILAR_FILMS } from '../../../constants/constants'
import ButtonShowNext from '../../../ui/Buttons/ButtonShowNext/ButtonShowNext'
import { observer } from 'mobx-react'


const SimilarFilms = (observer(() => {

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])

    const parameterId = useParams()
    const filmId = parseInt(parameterId.id)
    const currentSimilarFilms = movies?.docs?.find(i => i.id === filmId)?.similarMovies
    
    const [ currentIndexGroupToShow, setCurrentIndexGroupToShow ] = useState(0)

    const similarFilms = useMemo(() => {
        const start = currentIndexGroupToShow * DEFAULT_FIRST_SIMILAR_FILMS
        return currentSimilarFilms?.slice(start, start + DEFAULT_FIRST_SIMILAR_FILMS)
    }, [currentSimilarFilms, currentIndexGroupToShow])

    const handleShowMore = () => {
        const maxGroups = Math.ceil(currentSimilarFilms?.length / DEFAULT_FIRST_SIMILAR_FILMS)
        setCurrentIndexGroupToShow(currentIndexGroupToShow < maxGroups - 1 ? currentIndexGroupToShow + 1 : 0)

    }

    if (currentSimilarFilms === undefined) {
        return 
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4 className={styles.title}> Вам могут понравиться эти фильмы </h4>
                <ButtonShowNext onClick={handleShowMore} />
            </div>
            <div className={styles.films}>
                {similarFilms?.map((film) => {
                    return (
                        <div key={film.id} className={styles.films_card}>
                            <CardSimilarFilms 
                                id={film.id}
                                name={film.name}
                                poster={film.poster.url}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}))

export default SimilarFilms