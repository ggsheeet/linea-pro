import React from 'react'
import { HeroPlaceholder, HeroVid } from '@/components/media'
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
				poster={HeroPlaceholder}
				className={styles.hero_img}
			>
				<source src={HeroVid} type="video/mp4" />
			</video>
		</>
	)
}
