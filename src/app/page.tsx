import { HeroMain } from '@/components/hero/heroMain'
import { BannerWelcome } from '@/components/banner/bannerWelcome'
import { BannerIntro } from '@/components/banner/bannerIntro'
import { BannerSale } from '@/components/banner/bannerSale'

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
