import { useContext, useEffect, useState } from 'react' 
import styles from './CategoryFilms.module.scss'
import { StoreContext } from '../../../store/root'
import CardCategoryFilms from './CardCategoryFilms/CardCategoryFilms'
import DropdownForSort from '../../../ui/DropdownForSort/DropdownForSort'
import { observer } from 'mobx-react'


const CategoryFilms = (observer(() => {

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])

    const films = movies?.docs?.filter((film) => film.type === 'movie').sort((a, b) => b.rating?.imdb - a.rating?.imdb)
    const countriesForSort = [... new Set(films?.flatMap(film => film.countries.map(country => country?.name)))]
    const genresForSort = [... new Set(films?.flatMap(film => film.genres.map(genre => genre?.name)))]
    const yearsForSort = [... new Set(films?.map(film => film.year))].sort((a, b) => b - a)

    const [ criteriaSort, setCriteriaSort ] = useState({ country: '', genre: '', year: ''})

    const handleSort = (value, label) => {
        if (label === 'Страна') {
            setCriteriaSort({...criteriaSort, country: value})
        }
        if (label === 'Жанр') {
            setCriteriaSort({...criteriaSort, genre: value})
        }
        if (label === 'Год') {
            setCriteriaSort({...criteriaSort, year: value})
        }
    }

    const filteredFilms = films?.filter(film => {
        const matchesCountry = criteriaSort?.country ? film.countries.some(country => country?.name === criteriaSort.country) : true
        const matchesGenre = criteriaSort?.genre ? film.genres.some(genre => genre?.name === criteriaSort.genre) : true
        const matchesYear = criteriaSort?.year ? film.year == criteriaSort.year : true

        return matchesCountry && matchesGenre && matchesYear 
    })

    const sortData = [
        {
            options: countriesForSort,
            label: 'Страна',
            defaultValue: 'Все страны',
            onSort: handleSort,
        },
        {
            options: genresForSort,
            label: 'Жанр',
            defaultValue: 'Все жанры',
            onSort: handleSort,
        },
        {
            options: yearsForSort,
            label: 'Год',
            defaultValue: 'Все годы',
            onSort: handleSort,
        },
    ]

    const chooseSort = sortData.map((data, index) => 
        <DropdownForSort 
                key={index}            
                options={data.options}
                label={data.label}
                defaultValue={data.defaultValue}
                onSort={data.onSort}
        />
    )


    return (
        <div className={styles.container}>
            <div className={styles.sort}> {chooseSort} </div>
            {filteredFilms?.map(film => {
                return (
                    <CardCategoryFilms 
                        key={film.id}
                        id={film.id}    
                        name={film.name}
                        shortDescription={film.shortDescription}
                        poster={film.poster.url}
                        countries={film.countries.map(country => country?.name).slice(0, 2).join(', ')}
                        year={film.year}
                        durationTime={film.movieLength}
                        genres={film.genres.map(genre => genre?.name).slice(0, 3).join(', ')}
                        rating={film.rating?.imdb}
                        fees={film.fees?.world?.value}
                        ageRating={film.ageRating}
                    />
                )
            })}
        </div>
    )
}))

export default CategoryFilms