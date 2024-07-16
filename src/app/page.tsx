import { Metadata } from 'next'
import { HeroMain } from '@/components/hero/heroMain'
import { BannerWelcome } from '@/components/banner/bannersMain/bannerWelcome'
import { BannerApps } from '@/components/banner/bannersMain/bannerApps'
import { BannerSale } from '@/components/banner/bannersMain/bannerSale'

export const metadata: Metadata =  {
	title: 'Linea Pro Chocolate Mexicano',
	alternates: {
		canonical: 'https://www.chocolatepro.mx/'
	},
	openGraph: {
		siteName: 'Linea Pro Chocolate Mexicano'
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
