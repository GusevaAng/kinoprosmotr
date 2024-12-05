import { useContext, useEffect } from 'react' 
import styles from './CategoryYears.module.scss'
import { StoreContext } from '../../../store/root'
import { Link } from 'react-router-dom'
import Tooltip from '../../../ui/Tooltip/Tooltip'
import { observer } from 'mobx-react'


const CategoryYears = (observer(() => {

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])

    const films = movies?.docs?.filter((film) => film.type === 'movie')
    const filmsYears = [... new Set(films?.map((f) => f.year).sort((a, b) => b - a))]
    

    return (
        <div className={styles.container}>
            {filmsYears?.map(year => {
                return (
                    <div key={year} className={styles.wrapper}>
                        <h2 className={styles.year}> {year} </h2>
                        {films?.map(film => film.year === year && (
                            <Tooltip key={films.id} content={film.description}>
                                <Link key={film.id} to={`/film/${film.id}`} className={styles.film_link}>
                                    <h4 className={styles.film_name}> {film.name} </h4>
                                    <p className={styles.film_country}> ({film.countries?.map(country => country.name).slice(0, 3).join(', ')}) </p>
                                </Link>
                            </Tooltip>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}))

export default CategoryYears