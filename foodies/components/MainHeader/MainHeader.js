import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imgLogo from '@/assets/logo.png'
import styles from './MainHeader.module.css'
import NavLink from '../NavLink/NavLink'

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
                        <NavLink href="/meals">
                            Browse Meals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">
                            Browse Meals
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader