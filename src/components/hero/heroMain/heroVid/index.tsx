import React from 'react'
import { HeroPlaceholder, HeroVid } from '@/components/media'
import styles from './HeroVid.module.css'

export const HeroVideo = () => {
	return (
		<>
			<video
				width="1920"
				height="1080"
				preload='metadata'
				autoPlay
				muted
				playsInline
				loop
				poster={HeroPlaceholder}
			>
				<source src={HeroVid} type="video/mp4" />
			</video>
		</>
	)
}
