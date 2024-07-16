import React from 'react'
import { Metadata } from 'next'
import CardGrid from '@/components/card/cardGrid'
import BannerMap from '@/components/banner/bannersOther/bannerMap'

export const metadata: Metadata = {
	title: 'Quiero Chocolate',
	alternates: {
		canonical: 'https://www.chocolatepro.mx/comprar'
	},
	openGraph: {
		title: 'Quiero Chocolate',
		description:
			'Obten tu chocolate a través de nuestros distribuidores autorizados',
		images: [
			{
				secureUrl:
					'https://linea-pro.s3.us-east-2.amazonaws.com/lp-logos/lp-og.webp',
				url: 'https://linea-pro.s3.us-east-2.amazonaws.com/lp-logos/lp-og.webp',
				width: 1200,
				height: 630
			}
		],
		url: 'https://www.chocolatepro.mx/comprar',
		type: 'website',
	}
}

const Buy = () => {
	return (
		<>
			<CardGrid />
			<BannerMap />
		</>
	)
}

export default Buy
