'use client'
import React from 'react'
import Image from 'next/image'
import { BannerLight } from '../../bannerContainers/bannerLight'
import { bags } from '@/lib/mappedObjects'
import styles from './BannerWelcome.module.css'

export const BannerWelcome = () => {
	return (
		<BannerLight>
			<div className={styles.welcome}>
				<h1>Bienvenido a LÍNEA PRO</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<button>Conócenos</button>
			</div>
			<div className={`${styles.carousel_container} shadow-lg`}>
				{[...Array(2)].map((_, index) => (
					<ul key={index} className={styles.carousel_items}>
						{bags.map((bag, index) => (
							<li key={index}>
								<Image
									key={index}
									src={bag.src}
									alt={bag.alt}
									loading='eager'
									priority
									width={433}
									height={577}
								/>
							</li>
						))}
					</ul>
				))}
			</div>
		</BannerLight>
	)
}
