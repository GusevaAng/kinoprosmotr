import { useContext, useEffect, useState } from 'react' 
import styles from './Awards.module.scss'
import { StoreContext } from '../../store/root'
import Modal from '../../ui/Modal/Modal'
import { observer } from 'mobx-react'


const Awards = (observer(() => {

    const { awards, getAllAwards } = useContext(StoreContext)?.awardsStore || {}

    useEffect(() => {
        getAllAwards()
    }, [])

    const [ isOpenModal, setIsOpenModal ] = useState(true)


    return (
        <div className={styles.awards_page}>
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} >
                <div className={styles.info_section}>
                    <h4 className={styles.title}> Упс! </h4>
                    <p className={styles.text}> Эта страница еще в разработке. Здесь обязательно что-нибудь появится со временем. </p>
                    <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmMzaTkxZjUwdXl1Y3B5eXl2Nnhra2ZzdHhhc21uYmI3a2hyajV6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif" alt="gif cat" className={styles.gif}/>
                </div>
            </Modal>
        </div>
    )
}))

export default Awards