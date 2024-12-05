import { useContext, useEffect, useMemo, useState } from 'react' 
import styles from './UserReviews.module.scss'
import { StoreContext } from '../../../store/root'
import { useParams } from 'react-router-dom'
import ButtonShowNext from '../../../ui/Buttons/ButtonShowNext/ButtonShowNext'
import { DEFAULT_REVIEWS } from '../../../constants/constants'
import CardUserReviews from './CardUserReviews/CardUserReviews'
import { observer } from 'mobx-react'


// @TODO сделать пагинацию
const UserReviews = (observer(() => {

    const { reviews, getAllReviews } = useContext(StoreContext)?.reviewsStore || {}

    useEffect(() => {
        getAllReviews()
    }, [])


    const parameterId = useParams()
    const filmId = parseInt(parameterId.id)
    const currenFilmReviews = reviews?.filter((i) => i.movieId == filmId)

    const [ currentIndexGroupToShow, setCurrentIndexGroupToShow ] = useState(0)

    const filmReviews = useMemo(() => {
        const start = currentIndexGroupToShow * DEFAULT_REVIEWS
        return currenFilmReviews?.slice(start, start + DEFAULT_REVIEWS)
    }, [currenFilmReviews, currentIndexGroupToShow])

    const handleShowMore = () => {
        const maxGroups = Math.ceil(currenFilmReviews?.length / DEFAULT_REVIEWS)
        setCurrentIndexGroupToShow(currentIndexGroupToShow < maxGroups - 1 ? currentIndexGroupToShow + 1 : 0)
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4 className={styles.title}> Рецензии пользователей </h4>
                <ButtonShowNext onClick={handleShowMore} />
            </div>
            <div className={styles.wrapper}>
                {filmReviews?.map((review) => {
                    return (
                    <div key={review.index} className={styles.reviews}>
                        <CardUserReviews 
                            id={review.id}
                            author={review.author}
                            date={review.date}
                            title={review.title}
                            review={review.review}
                            type={review.type}
                        />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}))

export default UserReviews