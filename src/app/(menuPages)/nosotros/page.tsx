import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { BannerMission } from '@/components/banner/bannersOther/bannerMission'
import { BannerVision } from '@/components/banner/bannersOther/bannerVision'
import styles from './Nosotros.module.css'
import { TreeIcon } from '@/components/media'

export const metadata: Metadata = {
	title: 'Quienes Somos',
	openGraph: {
		title: 'Quienes Somos',
		description:
			'Apasionados por la riqueza de nuestra tierra, queremos hacer del cacao la estrella del momento',
		images: [
			{
				secureUrl:
					'https://linea-pro.s3.us-east-2.amazonaws.com/lp-logos/lp-og.webp',
				url: 'https://linea-pro.s3.us-east-2.amazonaws.com/lp-logos/lp-og.webp',
				width: 1200,
				height: 630
			}
		],
		url: 'https://www.chocolatepro.mx/nosotros',
		type: 'website'
	}
}

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
