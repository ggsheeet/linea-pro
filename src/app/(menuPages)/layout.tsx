import type { Metadata } from 'next'
import { HeroOther } from '@/components/hero/heroOther'

export const metadata: Metadata = {
    metadataBase: new URL('https://www.chocolatepro.mx'),
    title: {
        default: 'LÍNEA PRO',
        template: "%s"
    },
    description: 'Chocoalte de uso profesional 100% mexicano cultivado en Tabasco',
    openGraph: {
        title: 'LÍNEA PRO | CHOCOLATE MEXICANO',
        description:
            'Chocoalte de uso profesional 100% mexicano cultivado en Tabasco',
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
    alternates: {
        canonical: './',
    }
}

export default function NestedPageLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <HeroOther />
            {children}
        </>
    )
}
