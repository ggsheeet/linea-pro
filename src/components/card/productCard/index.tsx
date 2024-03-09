import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { bagCards } from '@/lib/mappedObjects'
import { Wolter } from '@/components/media'
import styles from './ProductCard.module.css'

const ProductCard = () => {
	return (
		<>
			{bagCards.map((card, index) => (
				<div key={index} className={styles.card}>
					<div className={styles.card_wrapper}>
						<div className={styles.card_icon}>
							<Image src={Wolter} alt='wolter' width={259} height={194} />
						</div>
					</div>
					<div className={styles.card_img}>
						<Image
							src={card.imgSrc}
							alt={card.imgAlt}
							width={card.imgW}
							height={card.imgH}
						/>
					</div>

					<div className={styles.card_title}>{card.name}</div>
					<div className={styles.card_description}>{card.description}</div>
					<div className={styles.card_wrapper}>
						<div className={styles.card_price}>{card.price}</div>
						<button>
							<Link href={card.href} rel='noopener noreferrer' target='_blank'>
								Ver Producto
							</Link>
						</button>
					</div>
				</div>
			))}
		</>
	)
}

export default ProductCard
