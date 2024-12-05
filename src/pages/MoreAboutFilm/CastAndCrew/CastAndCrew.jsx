import { useContext, useEffect, useMemo, useState } from 'react' 
import styles from './CastAndCrew.module.scss'
import { StoreContext } from '../../../store/root'
import { useParams } from 'react-router-dom'
import CardCastAndCrew from './CardCastAndCrew/CardCastAndCrew'
import { DEFAULT_FIRST_CAST } from '../../../constants/constants'
import ButtonShowNext from '../../../ui/Buttons/ButtonShowNext/ButtonShowNext'
import { observer } from 'mobx-react'


// @TODO сделать пагинацию
const CastAndCrew = (observer(() => {

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])

    const parameterId = useParams()
    const filmId = parseInt(parameterId.id)
    const currentFilm = movies?.docs?.find(i => i.id === filmId)

    const [currentIndexGroupToShow, setCurrentIndexGroupToShow] = useState(0)

    const castAndCrew = useMemo(() => {
        const start = currentIndexGroupToShow * DEFAULT_FIRST_CAST
        return currentFilm?.persons?.slice(start, start + DEFAULT_FIRST_CAST)
    }, [currentFilm, currentIndexGroupToShow])

    const handleShowMore = () => {
        const maxGroups = Math.ceil(currentFilm?.persons?.length / DEFAULT_FIRST_CAST)
        setCurrentIndexGroupToShow(currentIndexGroupToShow < maxGroups - 1 ? currentIndexGroupToShow + 1 : 0)
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4 className={styles.title}> Актёры и съёмочная группа </h4>
                <ButtonShowNext onClick={handleShowMore} />
            </div>
            <div className={styles.wrapper}>
                {castAndCrew?.map((person) => {
                    if (person.profession !== 'актеры дубляжа') {
                        return (
                            <div key={person.index} className={styles.persons}>
                                <CardCastAndCrew 
                                    name={person.name}
                                    description={person.description}
                                    photo={person.photo}
                                    profession={person.profession}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}))

export default CastAndCrew