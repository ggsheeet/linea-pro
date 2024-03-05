import React from 'react'
import { FirstButton, SecondButton } from './buttonCTA'
import styles from './HeroCTA.module.css'

export const HeroCTA = () => {
	return (
		<div className={styles.hero_text}>
			<h1 data-aos='fade-up' data-aos-offset='-100'>
				"El cacao debe ser nuevamente el protagonista del chocolate, no el azúcar"
			</h1>
			<span data-aos='fade-up' data-aos-offset='-100'>-Ana Parizot</span>
		</div>
	)
}
