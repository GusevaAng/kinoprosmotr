import { useContext, useEffect, useMemo, useState } from 'react' 
import styles from './PopularFilms.module.scss'
import { StoreContext } from '../../../store/root'
import { DEFAULT_FIRST_FILMS } from '../../../constants/constants'
import CardFilm from './CardFilm/CardFilm'
import CustomButton from '../../../ui/Buttons/CustomButton/CustomButton'
import { observer } from 'mobx-react'


const PopularFilms = (observer(() => {

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])
    
    const [ ratingSort, setRatingSort ] = useState('high')
    const [ typeFilter, setTypeFilter ] = useState('all')

    const handleRatingSort = (event) => {
        setRatingSort(event.target.value)
    }

    const ratingSortOptions = [
        { value: 'high', label: 'фильмы с высоким рейтингом' },
        { value: 'low', label: 'фильмы с низким рейтингом' }
    ]

    const handleTypeFilter = (event) => {
        setTypeFilter(event.target.value)
    }
    
    const typeFilterOptions = [
        { value: 'all', label: 'все типы' },
        { value: 'cartoon', label: 'мультфильмы' },
        { value: 'movie', label: 'фильмы' },
        { value: 'animated-series', label: 'мультипликационные сериалы' },
        { value: 'tv-series', label: 'телевизионные сериалы' }
    ]

    // @TODO можно вынести сортировку в стору
    const sortedFilm = movies?.docs?.slice().sort((a, b) => {
        if (ratingSort === 'high') {
            return b.rating.imdb - a.rating.imdb
        } else {
            return a.rating.imdb - b.rating.imdb
        }
    })

    const filteredFilm = sortedFilm?.filter((item) => {
        if (typeFilter === 'all') {
            return true
        } else {
            return item.type === typeFilter
        }
    })

    const [ popularFilmsToShow, setPopularFilmsToShow ] = useState(DEFAULT_FIRST_FILMS)

    const popularFilms = useMemo(() => {
        return filteredFilm?.slice(0, popularFilmsToShow)
    }, [filteredFilm, popularFilmsToShow])

    const handleShowMore = () => {
        setPopularFilmsToShow(popularFilmsToShow + DEFAULT_FIRST_FILMS)
    }


    return (
        <div className={styles.popular_films} >
            <div className={styles.header} >
                <h4 className={styles.title} > Популярные фильмы </h4>
                <div className={styles.select} >
                    <select id='selectRating' onChange={handleRatingSort} className={styles.select_rating} >
                        {ratingSortOptions.map((option) => (
                            <option 
                                key={option.value} 
                                value={option.value} 
                                selected={ratingSortOptions === option.value}
                            >
                                { option.label }
                            </option>
                        ))}
                    </select>
                    <select id='selectType' onChange={handleTypeFilter} className={styles.select_type} >
                        {typeFilterOptions.map((option) => (
                            <option 
                                key={option.value} 
                                value={option.value} 
                                selected={typeFilterOptions === option.value}
                            >
                                { option.label }
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={styles.films} >
                {popularFilms?.map((aboutFilm) => {
                    let firstThreePerson = aboutFilm.persons.slice(0, 2)
                    let cast = firstThreePerson.map((person) => person.name).join(', ')
                    cast = cast.replace(/,\s*$/, '')
              
                    let firstThreeGenres = aboutFilm.genres.slice(0, 2)
                    let genres = firstThreeGenres.map((genre) => genre.name).join(', ')
                    genres = genres.replace(/,\s*$/, '')

                    return (
                        <div key={aboutFilm.id} className={styles.films_card} >
                            <CardFilm 
                                key={aboutFilm.id}
                                id={aboutFilm.id}
                                name={aboutFilm.name}
                                poster={aboutFilm.poster.url}
                                description={aboutFilm.shortDescription}
                                cast={cast}
                                genres={genres}
                                rating={aboutFilm.rating.imdb}
                            />
                        </div>
                    )
                })}
            </div>
            <div className={styles.custom_button} >
                {popularFilms && 
                    <CustomButton onClick={handleShowMore} text={'показать больше'} />
                }
            </div>
        </div>
    )
}))

export default PopularFilms