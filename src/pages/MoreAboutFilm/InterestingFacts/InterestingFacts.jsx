import { useContext, useEffect, useMemo, useState } from 'react' 
import styles from './InterestingFacts.module.scss'
import { StoreContext } from '../../../store/root'
import { useParams } from 'react-router-dom'
import ButtonShowNext from '../../../ui/Buttons/ButtonShowNext/ButtonShowNext'
import { DEFAULT_INTERESTING_FACTS } from '../../../constants/constants'
import { observer } from 'mobx-react'


// @TODO сделать пагинацию
const InterestingFacts = (observer(() => {

    const { movies, getAllMovies } = useContext(StoreContext)?.moviesStore || {}

    useEffect(() => {
        getAllMovies()
    }, [])

    const parameterId = useParams()
    const filmId = parseInt(parameterId.id)
    const currentInterestingFacts = movies?.docs?.find(i => i.id === filmId).facts

    const [ currentIndexGroupToShow, setCurrentIndexGroupToShow ] = useState(0)

    const interestingFacts = useMemo(() => {
        const start = currentIndexGroupToShow * DEFAULT_INTERESTING_FACTS
        return currentInterestingFacts?.slice(start, start + DEFAULT_INTERESTING_FACTS)
    }, [currentInterestingFacts, currentIndexGroupToShow])

    const handleShowMore = () => {
        const maxGroups = Math.ceil(currentInterestingFacts?.length / DEFAULT_INTERESTING_FACTS)
        setCurrentIndexGroupToShow(currentIndexGroupToShow < maxGroups - 1 ? currentIndexGroupToShow + 1 : 0)
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h4 className={styles.title}> Интересные факты </h4>
                <ButtonShowNext onClick={handleShowMore} />
            </div>
            <div className={styles.facts}>
                <ul className={styles.unordered_list}>
                    {interestingFacts?.map((fact, index) => 
                        <li key={index} className={styles.list}> 
                            {fact.value.replace(/<a[^>]*>(.*?)<\/a>/g, '$1').replace(/&laquo;|&raquo;/g, '').replace(/&#\d+;/g, ' ')} 
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}))

export default InterestingFacts