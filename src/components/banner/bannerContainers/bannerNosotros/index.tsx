import React from 'react'
import { WrapperProps } from '@/types/globalTypes'
import styles from './BannerNosotros.module.css'

export const BannerNosotros: React.FC<WrapperProps> = ({ children }) => {
	return <section className={styles.banner_container}>{children}</section>
}
