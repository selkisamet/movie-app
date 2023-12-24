import React from 'react'
import styles from './styles.module.css'

const Skeleton = ({ height, width }) => {
    return (
        <div className={styles.skeleton} style={{ width, height }}></div>
    )
}

export default Skeleton;