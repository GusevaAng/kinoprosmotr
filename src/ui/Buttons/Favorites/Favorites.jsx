import { useContext, useState } from 'react' 
import styles from './Favorites.module.scss'
import iconFavoriteWhite from '../../../assets/favorite_button/favorite-button-white.png'
import iconFavoriteTransparent from '../../../assets/favorite_button/favorite-button-transparent.png'
import { StoreContext } from '../../../store/root'


const Favorites = (props) => {
    const {getFavoritesById, addOrDeleteToFavorites} = useContext(StoreContext)?.favoritesStore || {}

    const [ isFavorite, setIsFavorite ] = useState(Boolean(getFavoritesById(props.id))) 

    const onChangeFavorites = (filmName) => {
        addOrDeleteToFavorites(filmName, props.id)

        if (!isFavorite) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }

    return (
        <button onClick={() =>  onChangeFavorites({name: props.name , id: props.id }) } className={isFavorite ? styles.favorite_button_true : styles.favorite_button_false} > 
            {isFavorite ? (
                <img src={iconFavoriteWhite} alt="icon white" className={styles.favorite_icon} />
            ) : (
                <img src={iconFavoriteTransparent} alt="icon transparent" className={styles.favorite_icon} />
            )}
        </button>
    )
}

export default Favorites