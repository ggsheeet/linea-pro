import { Metadata } from 'next'
import { HeroMain } from '@/components/hero/heroMain'
import { BannerWelcome } from '@/components/banner/bannersMain/bannerWelcome'
import { BannerApps } from '@/components/banner/bannersMain/bannerApps'
import { BannerSale } from '@/components/banner/bannersMain/bannerSale'

export const metadata: Metadata =  {
	title: 'Bienvenido a Linea Pro',
	alternates: {
		canonical: 'https://www.chocolatepro.mx/'
	}
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
	return (
		<main>
			<HeroMain />
			<BannerWelcome />
			<BannerApps />
			<BannerSale />
		</main>
	)
}
