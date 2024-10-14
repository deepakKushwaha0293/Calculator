import styles from'../App.module.css'
const Display = ({displayVal})=>{

    return (
        <input type='text' className={styles.input1} id='display' value={displayVal} readOnly/>
    )

}

export default Display;