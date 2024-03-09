import React from 'react'
import { BannerNosotros } from '../../bannerContainers/bannerNosotros'
import styles from './BannerVision.module.css'

export const BannerVision = () => {
	return (
		<BannerNosotros>
			<div className={styles.banner_text}>
				<p>
					Aspiramos a ser innovadores en la promoción de prácticas sostenibles,
					estableciendo estándares éticos que inspiren a la industria
					chocolatera. Visualizamos un impacto positivo no solo en la
					experiencia del consumidor, sino también en las comunidades
					productoras y en el medio ambiente.
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
