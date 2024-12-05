import { useState } from 'react' 
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import icon_home_white from '../../assets/navbar/icon-home-white.png'
import icon_home_pink from '../../assets/navbar/icon-home-pink.png'


const navbarItems = [
    {
        link: '/',
        image: icon_home_white,
        imageHover: icon_home_pink,
        label: 'Главная'
    },
    {
        link: '/films',
        image: '/src/assets/navbar/icon-movies-white.png',
        imageHover: '/src/assets/navbar/icon-movies-pink.png',
        label: 'Фильмы'
    },
    {
        link: '/series',
        image: '/src/assets/navbar/icon-series-white.png',
        imageHover: '/src/assets/navbar/icon-series-pink.png',
        label: 'Сериалы'
    },
    {
        link: '/cartoons',
        image: '/src/assets/navbar/icon-cartoons-white.png',
        imageHover: '/src/assets/navbar/icon-cartoons-pink.png',
        label: 'Мультфильмы'
    },
    {
        link: '/awards',
        image: '/src/assets/navbar/icon-awards-white.png',
        imageHover: '/src/assets/navbar/icon-awards-pink.png',
        label: 'Награды'
    },
    {
        link: '/actors',
        image: '/src/assets/navbar/icon-actors-white.png',
        imageHover: '/src/assets/navbar/icon-actors-pink.png',
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