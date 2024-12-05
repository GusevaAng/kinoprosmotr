import { useState } from 'react' 
import styles from './Films.module.scss'
import ButtonCategory from '../../ui/Buttons/ButtonCategory/ButtonCategory'
import CategoryFilms from './CategoryFilms/CategoryFilms'
import CategoryGenres from './CategoryGenres/CategoryGenres'
import CategoryYears from './CategoryYears/CategoryYears'


const categories = [
    {
        category: 'all',
        name: 'Фильмы'
    },
    {
        category: 'genres',
        name: 'Жанры'
    },
    {
        category: 'years',
        name: 'Годы'
    }
]

const Films = () => {

    const [ currentCategory, setCurrentCategory ] = useState(categories[0])

    const showContentByCategory = () => {
        if (currentCategory === categories[0]) {
            return <CategoryFilms />
        } else if (currentCategory === categories[1]) {
            return <CategoryGenres />
        } else {
            return <CategoryYears />
        }
    }

    const chooseCategory = categories.map(category => 
        <ButtonCategory 
            key={category.name}
            onClick={() => setCurrentCategory(category)} 
            name={category.name}
            isActive={currentCategory === category}
        />
    )

    return (
        <div className={styles.films_page}>
            <div className={styles.header_header}>
                <h4 className={styles.lists}> Списки </h4>
                <div className={styles.category}>
                    {chooseCategory}
                </div>
            </div>
            {showContentByCategory()}
        </div>
    )
}

export default Films