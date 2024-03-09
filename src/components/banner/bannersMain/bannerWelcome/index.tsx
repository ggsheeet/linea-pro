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
					En nuestro espacio virtual, te invitamos a descubrir el encanto del
					chocolate mexicano de la más alta calidad. En Línea Pro, no solo
					encuentras exquisitas creaciones chocolateras, sino la llave para
					transformar tus momentos culinarios.<br /> <br />Cada producto ha sido
					seleccionado para inspirar tus creaciones y elevar
					tus experiencias gastronómicas.
				</p>
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
									width={bag.width}
									height={bag.height}
								/>
							</li>
						))}
					</ul>
				))}
			</div>
		</BannerLight>
	)
}
