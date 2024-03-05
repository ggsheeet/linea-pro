import React from 'react'
import styles from './HeroMain.module.css'
import { HeroOverlay } from './heroOverlay'
import { HeroVideo } from './heroVid'
import { HeroCTA } from './heroCTA'

export const HeroMain = () => {
	return (
		<div className={styles.hero_container}>
			<HeroVideo />
			<HeroOverlay />
			<HeroCTA />
		</div>
	)
}
