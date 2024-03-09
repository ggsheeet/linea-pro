import React from 'react'
import { BannerNosotros } from '../../bannerContainers/bannerNosotros'
import styles from './BannerMission.module.css'

export const BannerMission = () => {
	return (
		<BannerNosotros>
			<div className={styles.banner_header}>
				<h2>Misión</h2>
				<div className={styles.banner_overlay} />
				<div className={styles.banner_img} />
			</div>
			<div className={styles.banner_text}>
				<p>
					Preservar la tradición chocolatera mexicana con productos
					excepcionales y trazables. Colaborando con marcas comprometidas,
					buscando ser referente confiable para quienes disfrutan y comparten el
					chocolate mexicano, ofreciendo experiencias gastronómicas únicas.{' '}
				</p>
			</div>
		</BannerNosotros>
	)
}
