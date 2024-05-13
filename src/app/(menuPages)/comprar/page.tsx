import React from 'react'
import { Metadata } from 'next'
import CardGrid from '@/components/card/cardGrid'

export const metadata: Metadata = {
	title: 'Quiero Chocolate',
	openGraph: {
		title: 'Quiero Chocolate',
		description:
			'Obten tu chocolate a través de nuestros distribuidores autorizados'
	}
}

const Buy = () => {
	return (
		<>
			<CardGrid />
		</>
	)
}

export default Buy
