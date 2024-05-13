import { Metadata } from 'next'
import { HeroMain } from '@/components/hero/heroMain'
import { BannerWelcome } from '@/components/banner/bannersMain/bannerWelcome'
import { BannerIntro } from '@/components/banner/bannersMain/bannerIntro'
import { BannerSale } from '@/components/banner/bannersMain/bannerSale'

export const metadata: Metadata =  {
	title: 'Inicio'
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
	return (
		<main>
			<HeroMain />
			<BannerWelcome />
			<BannerIntro />
			<BannerSale />
		</main>
	)
}
