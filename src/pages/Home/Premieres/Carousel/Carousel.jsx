import { useEffect, useState } from 'react' 
import styles from './Carousel.module.scss'
import { Link } from 'react-router-dom'
import prev_arrow from '../../../../assets/reusable_icons/prev-arrow.png'
import next_arrow from '../../../../assets/reusable_icons/next-arrow.png'
import { DEFAULT_INTERVAL } from '../../../../constants/constants'


const Carousel = ({ latestFilms }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const prevSlide = () => {
        setCurrentSlideIndex((currentSlideIndex) => (currentSlideIndex - 1 + latestFilms.length) % latestFilms.length)
    }

    const nextSlide = () => {
        setCurrentSlideIndex((currentSlideIndex) => (currentSlideIndex + 1 + latestFilms.length) % latestFilms.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, DEFAULT_INTERVAL)
        return () => clearInterval(interval)
    }, [latestFilms?.length])

    return (
        <div className={styles.container}>
            {latestFilms?.length > 0 && (
                <div className={styles.carousel} style={ {backgroundImage: `url(${latestFilms[currentSlideIndex].poster.previewUrl})`} }>
                    <div className={styles.wrapper}>
                        <button onClick={prevSlide} className={styles.button_prev}> 
                            <img src={prev_arrow} alt="prev arrow" className={styles.arrow}/>
                        </button>
                        <Link to={`/film/${latestFilms[currentSlideIndex].id}`} className={styles.film_link} >
                            <h4 className={styles.film_name} > {latestFilms[currentSlideIndex].name} </h4>
                        </Link>
                        <button onClick={nextSlide} className={styles.button_next}>  
                            <img src={next_arrow} alt="next arrow" className={styles.arrow}/>
                        </button>
                        <div className={styles.dots}>
                            {/* @TODO обернуть в useMemo вынести за ретерн */}
                            {latestFilms?.map((_, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setCurrentSlideIndex(index)}
                                    className={`${styles.dot} ${index === currentSlideIndex ? styles.dot_active : ''}`}
                                > </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Carousel