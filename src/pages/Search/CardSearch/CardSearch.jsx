import styles from './CardSearch.module.scss'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'
import Tooltip from '../../../ui/Tooltip/Tooltip'


const CardSearch = (props) => {

    return (
        <div key={props.id} className={styles.card} style={ {backgroundImage: `url(${props.poster})`} }>
            <Link to={`/film/${props.id}`} className={styles.wrapper}>
                <div className={styles.rating}>
                    <Rating 
                        name="read-only"
                        value={(props.rating) / 2}  
                        precision={0.5}
                        size='large'
                        readOnly
                    />
                    <h5 className={styles.rating_imdb}> {props.rating} </h5>
                </div>
                <div className={styles.footer}>
                    <Tooltip content={props.description} >
                        <h4 className={styles.name}> {props.name} </h4>
                        <p className={styles.year}> ({props.year} г.) </p>
                    </Tooltip>
                </div>
            </Link>
            
        </div>
    )
}

export default CardSearch