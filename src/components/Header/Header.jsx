import styles from './Header.module.scss'
import logo from '../../assets/header/logo.png'
import search from '../../assets/header/search.png'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate()

    const handleClickLogo = () => {
        navigate('/')
    }

    const handleClickSearch = () => {
        navigate('/search')
    }

    return (
        <div className={styles.header}>
            <button onClick={handleClickLogo} className={styles.logo}>
                <img src={ logo } alt="logo" className={styles.logo_image} />
                <h1 className={styles.app_name} > Кинопросмотр </h1>
            </button>
            <div className={styles.wrapper_right} >
                <button onClick={handleClickSearch} className={styles.button_search} >
                    <img src={ search } alt="icon search" className={styles.search_icon} />
                </button>
                <p className={styles.slogan} > здесь найдется всё [со временем] </p>
            </div>
        </div>
    )
}

export default Header