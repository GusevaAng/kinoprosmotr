import { useState } from 'react' 
import styles from './Series.module.scss'
import Modal from '../../ui/Modal/Modal'


const Series = () => {

    const [ isOpenModal, setIsOpenModal ] = useState(true)

    return (
        <div className={styles.series_page}>
             <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} >
                <div className={styles.info_section}>
                    <h4 className={styles.title}> Упс! </h4>
                    <p className={styles.text}> Эта страница еще в разработке. Здесь обязательно что-нибудь появится со временем. </p>
                    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTY2cmp4YXpwajM3dnIyNTdrZ2c5MjRvOWlvNmk5bHFkeHlxNTJldSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vWst8QUOKAot6MHEZe/giphy.gif" alt="gif cat" className={styles.gif}/>
                </div>
            </Modal>
        </div>
    )
}

export default Series