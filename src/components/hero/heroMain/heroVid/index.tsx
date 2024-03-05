import React from 'react'
import { HeroVid } from '@/components/imgs'
import styles from './HeroVid.module.css'

export const HeroVideo = () => {
	return (
		<>
			<video
				width="1920"
				height="1080"
				preload='auto'
				autoPlay
				muted
				playsInline
				loop
				className={styles.hero_img}
			>
				<source src={HeroVid} type="video/mp4" />
			</video>
		</>
	)
}
