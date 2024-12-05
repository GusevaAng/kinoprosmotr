import { useEffect, useState } from 'react' 
import styles from './CardUserReviews.module.scss'
import avatar1 from '../../../../assets/avatars/avatar-hamster.png'
import avatar2 from '../../../../assets/avatars/avatar-man-mage.png'
import avatar3 from '../../../../assets/avatars/avatar-man-scientist.png'
import avatar4 from '../../../../assets/avatars/avatar-nesting-dolls.png'
import avatar5 from '../../../../assets/avatars/avatar-pinata.png'
import avatar6 from '../../../../assets/avatars/avatar-princess.png'
import avatar7 from '../../../../assets/avatars/avatar-raccoon.png'
import avatar8 from '../../../../assets/avatars/avatar-teddy-bear.png'
import avatar9 from '../../../../assets/avatars/avatar-unicorn.png'
import avatar10 from '../../../../assets/avatars/avatar-woman-superhero.png'

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10]

const CardUserReviews = (props) => {

    const date = new Date(props.date).toLocaleDateString()

    const [ avatar, setAvatar ] = useState()

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * avatars.length)
        setAvatar(avatars[randomIndex])
    }, [])

    const [ isExpanded, setIsExpanded ] = useState(false)

    const handleShowMore = () => {
        setIsExpanded(!isExpanded)
    }

    const linesReview = props.review.replace(/<\/?[^>]+( style="[^"]*")?>/g, '')
    const visibleLinesReview = isExpanded ? linesReview : linesReview.slice(0, 300) // количество символов предварительного отображения рецензии @TODO вынести в константу

    const cardClassByType = props.type === 'Позитивный' ? styles.positive :
                            props.type === 'Нейтральный' ? styles.neutral :
                            props.type === 'Негативный' ? styles.negative : ''

    return (
        <div className={`${styles.card} ${cardClassByType}`}>
            <div className={styles.header}>
                <div className={styles.user}>
                    <img src={avatar} alt="user avatar" className={styles.avatar} />
                    <h3 className={styles.author}> {props.author} </h3>
                </div>
                <p className={styles.date}> {date} </p>
            </div>
            <div className={styles.info_section}>
                <h4 className={styles.title}> {props.title} </h4>
                <p className={styles.review}> {visibleLinesReview} </p>
                <button onClick={handleShowMore} className={styles.button_visible_lines} > {isExpanded ? 'Скрыть рецензию' : 'Показать всю рецензию'} </button>
            </div>
        </div>
    )
}

export default CardUserReviews