import { useState } from 'react' 
import styles from './Tooltip.module.scss'


const Tooltip = ({ content, children }) => {

    const [ visible, setVisible ] = useState(false)

    if (!content) {
        return <div> {children} </div>
    }
    
    return (
        <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} className={styles.tooltip}>
            {children}
            {visible && (
                <div className={styles.tooltip_content}>
                    {content}
                </div>
            )}
        </div>
    )
}

export default Tooltip