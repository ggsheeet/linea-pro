'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { heroCTAs } from '@/lib/mappedObjects'
import styles from './HeroCTA.module.css'

export const HeroCTA = () => {
	const pathname = usePathname()

	return (
		<div className={styles.hero_text}>
			{heroCTAs.map((cta, index) => {
				const isActive = pathname.startsWith(cta.href)
				return (
					<h1
						key={index}
						data-aos='fade-up'
						data-aos-offset='300'
						className={isActive ? '' : 'hidden'}
					>
						{cta.name}
					</h1>
				)
			})}
		</div>
	)
}
