import { Metadata } from 'next'
import { HeroMain } from '@/components/hero/heroMain'
import { BannerWelcome } from '@/components/banner/bannersMain/bannerWelcome'
import { BannerApps } from '@/components/banner/bannersMain/bannerApps'
import { BannerSale } from '@/components/banner/bannersMain/bannerSale'

export const metadata: Metadata =  {
	title: 'Bienvenido'
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
	return (
		<main>
			<h1 className='hidden'>Línea Pro</h1>
			<HeroMain />
			<BannerWelcome />
			<BannerApps />
			<BannerSale />
		</main>
	)
}
