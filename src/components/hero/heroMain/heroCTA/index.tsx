import React from 'react'
import { FirstButton, SecondButton } from './buttonCTA'
import styles from './HeroCTA.module.css'

export const HeroCTA = () => {
	return (
		<div className={styles.hero_text}>
			<h2>
				"El cacao debe ser nuevamente el protagonista del chocolate, no el azúcar"
			</h2>
			<span>-Ana Parizot Wolter</span>
		</div>
	)
}
