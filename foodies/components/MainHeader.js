import React from 'react'
import Link from 'next/link'
import imgLogo from '@/assets/logo.png'

const MainHeader = () => {
    return (
        <header>
            <Link href="/">
                <img src={imgLogo.src} alt="A plate with food on it" />
                Mebarki Food
            </Link>
            <nav>
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