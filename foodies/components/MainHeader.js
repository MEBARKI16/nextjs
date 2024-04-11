import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imgLogo from '@/assets/logo.png'
import styles from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={imgLogo.src} alt="A plate with food on it" width="1024" height="1024" priority />
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