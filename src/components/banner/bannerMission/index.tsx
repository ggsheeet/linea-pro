import React from 'react'
import { BannerLight } from '../bannerContainer/bannerLight'
import styles from './BannerMission.module.css'

export const BannerMission = () => {
	return (
		<BannerLight>
			<div className={styles.banner_header}>
				<h2>Misión</h2>
			</div>
			<div className={styles.banner_text}>
				<p>Brindar chocolate de la más alta calidad con los estándares más altos</p>
			</div>
		</BannerLight>
	)
}
