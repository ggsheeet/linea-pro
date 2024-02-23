import React from 'react'
import { usePathname } from 'next/navigation'
import { NavLink } from '../../navLink'
import styles from '../NavMain.module.css'

export const NavMenu = () => {
    const pathname = usePathname()


    const menuLinks = [
        { name: 'Quienes Somos', href: '/nosotros' },
        { name: 'Trayectoria', href: '/trayectoria' },
        { name: 'Quiero Chocolate', href: '/comprar' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contacto' }
    ]

    return (
        <div className={styles.nav_menu}>
            {menuLinks.map((link, index) => {
                const isActive = pathname.startsWith(link.href)
                return (
                    <React.Fragment key={index}>
                        <NavLink href={link.href} className={isActive ? 'text-brand-link' : ''}>{link.name}</NavLink>
                    </React.Fragment>)
            })
            }
        </div>
    )
}