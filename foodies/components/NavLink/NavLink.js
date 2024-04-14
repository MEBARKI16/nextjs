"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from "./NavLink.module.css"
import Link from 'next/link'

const NavLink = ({ href, children }) => {
    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? styles.active : ""}>
            {children}
        </Link>
    )
}

export default NavLink