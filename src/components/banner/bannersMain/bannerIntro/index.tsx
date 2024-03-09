import React from 'react'
import Image from 'next/image'
import { BannerLightOther } from '../../bannerContainers/bannerLightOther'
import { BannerImg } from '@/components/media'
import styles from './BannerIntro.module.css'

export const BannerIntro = () => {
	return (
		<BannerLightOther>
			<h3 className={styles.apps_title}>Aplicaciones</h3>
			<div className={styles.apps_container}>
				<div className={`${styles.banner_img} drop-shadow-lg`}>
					<Image alt='banner img' src={BannerImg} width={3648} height={5472} />
				</div>
				<div className={styles.banner_text}>
					<ul>
						<li>Melters<p>Barras plana, o con inclusiones, Barks, Monedas...</p></li>
						<li>Pastelería<p>Ganache para relleno o cubierta, Figuras, Texturas, Decoración...</p></li>
						<li>Panadería<p>Mousses, Cremas, Salsas, Coulis...</p></li>
						<li>Chocolatería Fina<p>Bombones, Trufas, Macarrones...</p></li>
						<li>Cata Maridaje<p>Con Vinos, Licores, Café, Quesos...</p></li>
						<li>Bebidas<p>Blends, Mocha, Bebida Europea...</p></li>
						<li>Heladería<p>Como Ingrediente o Topping...</p></li>
					</ul>
				</div>
			</div>
		</BannerLightOther>
	)
}
