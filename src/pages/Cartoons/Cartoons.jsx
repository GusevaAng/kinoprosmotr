import { useState } from 'react' 
import styles from './Cartoons.module.scss'
import Modal from '../../ui/Modal/Modal'


const Cartoons = () => {

    const [ isOpenModal, setIsOpenModal ] = useState(true)

    return (
        <div className={styles.cartoons_page}>
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} >
                <div className={styles.info_section}>
                    <h4 className={styles.title}> Упс! </h4>
                    <p className={styles.text}> Эта страница еще в разработке. Здесь обязательно что-нибудь появится со временем. </p>
                    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW1nZm14dDJqM3VqcWwzazBtZ21lOWU1cGpidGxubnQxNzl0MTE0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LHZyixOnHwDDy/giphy.gif" alt="gif cat" className={styles.gif}/>
                </div>
            </Modal>
        </div>
    )
}

export default Cartoons