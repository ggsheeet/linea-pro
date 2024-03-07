import React from 'react'
import Image from 'next/image'
import { BannerMission } from '@/components/banner/bannersOther/bannerMission'
import { BannerVision } from '@/components/banner/bannersOther/bannerVision'
import styles from './Nosotros.module.css'
import { TreeIcon } from '@/components/media'

const AboutUs = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.about_us}>
					<p>
						<span className={styles.span_1}>LÍNEA PRO</span> | CHOCOLATE
						MEXICANO
						<br />
						APASIONADOS POR LA RIQUEZA DE NUESTRA TIERRA <br />
						QUEREMOS HACER DEL <span className={styles.span_2}>CACAO</span> LA
						ESTRELLA DEL MOMENTO
					</p>
					<Image src={TreeIcon} alt='cacao-tree' width={799} height={851} />
				</div>
			</div>
			<BannerMission />
			<BannerVision />
		</>
	)
}

export default AboutUs
