import { useContext, useEffect, useMemo } from 'react'
import styles from './Sidebar.module.scss'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../store/root'
import { observer } from 'mobx-react'


const Sidebar = (observer(() => {
    const {favorites, getAllFavorites, triggerForUpdate, setTriggerForUpdate} = useContext(StoreContext)?.favoritesStore || {}

    useEffect(() => {
        if (!favorites || (favorites && triggerForUpdate)) {
            getAllFavorites()

            setTriggerForUpdate(false)
        }
    }, [triggerForUpdate])

    const showFavorites = useMemo(() => {
        return favorites?.map((favorite, index) => (
            <li key={index}> 
                <Link to={`/film/${favorite.id}`} className={styles.films_link} >
                    {favorite.name} 
                </Link>
            </li>
        ))
    }, [favorites])


    return (
        <div className={styles.sidebar} >
            <p className={styles.title} > Фильмы в избранном </p>
            <ul className={styles.favorite_film} > 
                {showFavorites}
            </ul>
        </div>
    )
}))

export default Sidebar