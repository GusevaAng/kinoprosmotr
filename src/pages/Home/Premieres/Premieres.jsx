import { useContext, useEffect } from 'react' 
import styles from './Premieres.module.scss'
import { StoreContext } from '../../../store/root'
import Carousel from './Carousel/Carousel'
import { observer } from 'mobx-react'


const Premieres = (observer(() => {    

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])
    
    
    // @TODO можно вынести сортировку в стору
    const latestFilms = movies?.docs?.slice().sort((a, b) =>  new Date(b.premiere?.world) - new Date(a.premiere?.world)).slice(0, 3)

    
    return (
        <div className={styles.container}>
            <Carousel latestFilms={latestFilms}/>
        </div>
    )
}))

export default Premieres