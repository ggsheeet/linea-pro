import React from 'react'
import { BannerNosotros } from '../../bannerContainers/bannerNosotros'
import styles from './BannerVision.module.css'

export const BannerVision = () => {
	return (
		<BannerNosotros>
			<div className={styles.banner_text}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</div>
			<div className={styles.banner_header}>
				<h2>Visión</h2>
				<div className={styles.banner_overlay} />
				<div className={styles.banner_img} />
			</div>
		</BannerNosotros>
	)
}
