import React from 'react'
import styles from "./styles.module.css"
import { FaPlayCircle } from "react-icons/fa"
import Link from "next/link"

const Header = () => {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href="/" className={styles.logo}>
                    <FaPlayCircle /> FILMS
                </Link>

                <nav className={styles.navigationMenu}>
                    <Link href="/about">Movies</Link>
                    <Link href="/about">Series</Link>
                    <Link href="/about">Kids</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header