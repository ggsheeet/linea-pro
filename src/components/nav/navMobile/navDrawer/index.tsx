import React from 'react'
import Link from 'next/link'
import { DrawerProps } from '@/types/globalTypes'
import styles from './NavDrawer.module.css'

const navLinks = [
  { href: '/', text: 'Inicio'},
  { href: '/nosotros', text: 'Quienes Somos' },
  { href: '/trayectoria', text: 'Trayectoria' },
  { href: '/comprar', text: 'Quiero Chocolate' },
  { href: '/blog', text: 'Blog' },
  { href: '/contacto', text: 'Contacto' }
]

export const NavDrawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <div className={`${styles.drawer_container} ${isOpen ? styles.open : ''}`}>
      {navLinks.map((link, index) => (
        <React.Fragment key={index}>
          <Link href={link.href} rel='noopener noreferrer' onClick={toggleDrawer}>
            {link.text}
          </Link>
          <hr className={styles.solid} />
        </React.Fragment>
      ))}
    </div>
  )
}
