import React from 'react'
import ProductCard from '../productCard'
import styles from './CardGrid.module.css'
import { Caladea } from 'next/font/google'

const CardGrid = () => {
	return (
		<div className={styles.grid_container}>
			<div className={styles.grid_contents}>
				<ProductCard />
			</div>
		</div>
	)
}

export default CardGrid
