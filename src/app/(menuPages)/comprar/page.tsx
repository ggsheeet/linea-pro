import React from 'react'
import { Metadata } from 'next'
import CardGrid from '@/components/card/cardGrid'

export const metadata: Metadata =  {
	title: 'Quiero Chocolate'
}

const Buy = () => {
	return (
		<>
		<CardGrid />
		</>
	)
}

export default Buy
