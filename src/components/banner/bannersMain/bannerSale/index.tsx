import React from 'react'
import Image from 'next/image'
import { BannerDark } from '../../bannerContainers/bannerDark'
import { distribuitors } from '@/lib/mappedObjects'
import styles from './BannerSale.module.css'

export const BannerSale = () => {
	return (
		<BannerDark>
			<div className={`${styles.sale_container}`}>
				<div className={styles.sale_text}>
					<h3>
						Obten tu chocolate a través de nuestros distribuidores autorizados
					</h3>
					<button>Quiero Chocolate</button>
				</div>
				<div className={styles.sale_img}>
					{distribuitors.map((dist, index) => (
						<Image
							src={dist.src}
							alt={dist.alt}
							key={index}
							width={300}
							height={300}
						/>
					))}
				</div>
				<button>Quiero Chocolate</button>
			</div>
		</BannerDark>
	)
}
