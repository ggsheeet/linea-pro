import React from 'react'
import Image from 'next/image'
import { BannerLight } from '../bannerContainer/bannerLight'
import { BannerImg } from '@/components/imgs'
import styles from './BannerIntro.module.css'

export const BannerIntro = () => {
	return (
		<BannerLight>
			<div className={styles.banner_img}>
				<Image alt='banner img' src={BannerImg} width={3648} height={5472} />
			</div>
			<div className={styles.banner_text}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est
					laborum.
				</p>
				<button>Ver Trayectoria</button>
			</div>
		</BannerLight>
	)
}
