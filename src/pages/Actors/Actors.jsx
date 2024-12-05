import { useState } from 'react' 
import styles from './Actors.module.scss'
import Modal from '../../ui/Modal/Modal'


const Actors = () => {

    const [ isOpenModal, setIsOpenModal ] = useState(true)
    
    return (
        <div className={styles.actors_page}>
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} >
                <div className={styles.info_section}>
                    <h4 className={styles.title}> Упс! </h4>
                    <p className={styles.text}> Эта страница еще в разработке. Здесь обязательно что-нибудь появится со временем. </p>
                    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWdha3h6cmduc3Y0M3p4cGE2aGUwZDFqNmNvOWhydzRzcmN0ZTdtayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3htkfUBTmXXaEgbQM2/giphy.gif" alt="gif cat" className={styles.gif}/>
                </div>
            </Modal>
        </div>
    )
}

export default Actors