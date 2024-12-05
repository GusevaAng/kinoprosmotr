import styles from './DropdownForSort.module.scss'


const DropdownForSort = ({ options, onSort, label, defaultValue}) => {

    return (
        <div className={styles.dropdown}>
            <label className={styles.label}> {label} </label>
            <select onChange={(e) => onSort(e?.target?.value, label)}  className={styles.select}> 
                <option className={styles.default_value}> {defaultValue} </option>
                {options?.map((option, index) => (
                    <option key={index} value={option} className={styles.option}> 
                        {option} 
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropdownForSort