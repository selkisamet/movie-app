import Link from "next/link"
import styles from "./styles.module.css"
import React from 'react'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            Made with ❤️ by&nbsp;
            <Link href="https://sametselki.com.tr" target="_blank">
                Samet SELKİ
            </Link>
        </footer>
    )
}

export default Footer