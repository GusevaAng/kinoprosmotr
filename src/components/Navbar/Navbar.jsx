import { useState } from 'react' 
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import icon_home_white from '../../assets/navbar/icon-home-white.png'
import icon_home_pink from '../../assets/navbar/icon-home-pink.png'
import icon_movies_white from '../../assets/navbar/icon-movies-white.png'
import icon_movies_pink from '../../assets/navbar/icon-movies-pink.png'
import icon_series_white from '../../assets/navbar/icon-series-white.png'
import icon_series_pink from '../../assets/navbar/icon-series-pink.png'
import icon_cartoons_white from '../../assets/navbar/icon-cartoons-white.png'
import icon_cartoons_pink from '../../assets/navbar/icon-cartoons-pink.png'
import icon_awards_white from '../../assets/navbar/icon-awards-white.png'
import icon_awards_pink from '../../assets/navbar/icon-awards-pink.png'
import icon_actors_white from '../../assets/navbar/icon-actors-white.png'
import icon_actors_pink from '../../assets/navbar/icon-actors-pink.png'


const navbarItems = [
    {
        link: '/',
        image: icon_home_white,
        imageHover: icon_home_pink,
        label: 'Главная'
    },
    {
        link: '/films',
        image: icon_movies_white,
        imageHover: icon_movies_pink,
        label: 'Фильмы'
    },
    {
        link: '/series',
        image: icon_series_white,
        imageHover: icon_series_pink,
        label: 'Сериалы'
    },
    {
        link: '/cartoons',
        image: icon_cartoons_white,
        imageHover: icon_cartoons_pink,
        label: 'Мультфильмы'
    },
    {
        link: '/awards',
        image: icon_awards_white,
        imageHover: icon_awards_pink,
        label: 'Награды'
    },
    {
        link: '/actors',
        image: icon_actors_white,
        imageHover: icon_actors_pink,
        label: 'Актеры'
    }
]


const Navbar = () => {

    const [ isHover, setIsHover ] = useState(false)
    const [ showImageWhite, setShowImageWhite ] = useState(false)

    const handleOnMouseEnter = () => {
        setIsHover(true)
        setShowImageWhite(true)
    }

    const handleOnMouseLeave = () => {
        setIsHover(false)
        setShowImageWhite(false)
    }


    return (
        <div 
            className={`${styles.navbar} ${isHover ? styles.expanded : ''}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <div>
                {navbarItems.map((item, index) => {
                    return (
                        <div key={index} className={styles.navigate_item} >
                            <Link to={item.link} className={styles.navbar_link} >
                                <div className={styles.navigate_item_icon} >
                                    {showImageWhite ? (
                                        <img src={item.imageHover} alt='icon pink' />
                                    ) : (
                                        <img src={item.image} alt='icon white' />
                                    )}
                                </div>
                                <div className={styles.navigate_item_label} >
                                    {isHover && (
                                        <span className={` ${isHover ? styles.visible : ''} `}> {item.label} </span>
                                    )}
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar