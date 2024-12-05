import { useContext, useEffect, useState } from 'react' 
import styles from './Search.module.scss'
import { observer } from 'mobx-react'
import { StoreContext } from '../../store/root'
import CardSearch from './CardSearch/CardSearch'


const Search = (observer(() => {

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])

    const [ searchBar, setSearchBar ] = useState('')

    const matchForName = movies?.docs?.filter(film => film?.name?.toLowerCase().includes(searchBar.toLowerCase()))


    return (
        <div className={styles.search_page}>
            <form action="" className={styles.search_bar}>
                <input 
                    type="text"
                    placeholder="Поиск по названию"
                    onChange={(e) => setSearchBar(e.target.value)}
                    className={styles.search_bar_input}
                />
            </form>
            <div className={styles.search_card} >
                {matchForName?.map((film) => 
                    <CardSearch 
                        key={film.id}
                        id={film.id}
                        name={film.name}
                        poster={film.poster.url}
                        description={film.shortDescription}
                        year={film.year}
                        rating={film.rating?.imdb}
                    />
                )}
            </div>
        </div>
    )
}))

export default Search