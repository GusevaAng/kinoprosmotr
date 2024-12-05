import styles from './Home.module.scss'
import PopularFilms from './PopularFilms/PopularFilms'
import Premieres from './Premieres/Premieres'


const Home = () => {

    return (
        <div className={styles.home_page} >
            <Premieres />
            <PopularFilms />
        </div>
    )
}

export default Home