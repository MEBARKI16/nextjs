import React from 'react'
import Link from 'next/link'
import imgLogo from '@/assets/logo.png'
import styles from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img src={imgLogo.src} alt="A plate with food on it" />
                Mebarki Food
            </Link>
            <nav className={styles.nav} >
                <ul>
                    <li>
                        <Link href="/meals">
                            Browse Meals
                        </Link>
                    </li>
                    <li>
                        <Link href="/community">
                            Foodies Community
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader