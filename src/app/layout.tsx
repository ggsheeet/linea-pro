import type { Metadata } from 'next'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { AOSProvider } from '@/lib/animations'
import { NavMain } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Prata, Raleway, Urbanist } from 'next/font/google'
import './globals.css'

const prata = Prata({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-prata',
	display: 'swap'
})
const urbanist = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist',
	display: 'swap'
})
const raleway = Raleway({
	subsets: ['latin'],
	variable: '--font-raleway',
	display: 'swap'
})

const favicon = '/favicon.ico'

export const metadata: Metadata = {
	metadataBase: new URL('https://www.chocolatepro.mx'),
	title: 'LÍNEA PRO | CHOCOLATE MEXICANO',
	description: 'Chocolate de uso profesional 100% mexicano cultivado en Tabasco',
	openGraph: {
		title: 'LÍNEA PRO | CHOCOLATE MEXICANO',
		description:
			'Chocolate de uso profesional 100% mexicano cultivado en Tabasco',
		images: [
			{
				secureUrl:
					'https://linea-pro.s3.us-east-2.amazonaws.com/lp-logos/lp-og.webp',
				url: 'https://linea-pro.s3.us-east-2.amazonaws.com/lp-logos/lp-og.webp',
				width: 1200,
				height: 630
			}
		],
		url: 'https://www.chocolatepro.mx',
		type: 'website'
	},
	icons: {
		icon: favicon
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='es'>
			<GoogleAnalytics gaId='G-0RQH4ZZQ2W' />
			<GoogleTagManager gtmId='GTM-539KTHW4' />
			<body
				className={`${prata.variable} ${urbanist.variable} ${raleway.variable}`}
			>
				<AOSProvider />
				<header>
					<NavMain />
				</header>
				{children}
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	)
}
