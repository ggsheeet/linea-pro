'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { BannerLightOther } from '../../bannerContainers/bannerLightOther'
import { BannerImg } from '@/components/media'
import { apps } from '@/lib/mappedObjects'
import styles from './BannerApps.module.css'

export const BannerApps = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const toggleAccordion = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<BannerLightOther>
			<h3 className={styles.apps_title}>Aplicaciones</h3>
			<div className={styles.apps_container}>
				<div className={`${styles.banner_img} drop-shadow-lg`}>
					<Image alt='banner img' src={BannerImg} width={3648} height={5472} />
				</div>
				<div className={styles.banner_apps}>
					<div className={styles.banner_content}>
						<div className={styles.app_container}>
							{apps.map((app, index) => (
								<React.Fragment key={index}>
									<div
										className={`${styles.app_name} ${
											activeIndex === index ? styles.active : ''
										}`}
										role='button'
										tabIndex={index}
										onClick={() => toggleAccordion(index)}
									>
										<h3>{app.title}</h3>
										<button
											className={`${styles.app_arrow} ${
												activeIndex === index ? styles.active : ''
											}`}
										/>
									</div>
									<div
										className={`${styles.app_info} ${
											activeIndex === index ? styles.active : ''
										}`}
									>
										<p>{app.description}</p>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
		</BannerLightOther>
	)
}
