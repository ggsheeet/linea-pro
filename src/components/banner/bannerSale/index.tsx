import React from 'react'
import Image from 'next/image'
import { BannerDark } from '../bannerContainer/bannerDark'
import styles from './BannerSale.module.css'


export const BannerSale = () => {
    const bags = [
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/chocosolutions.webp`, alt: 'chocosolutions' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/central-gourmet.webp`, alt: 'central-gourmet' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/cacao-house.webp`, alt: 'cacao-house' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/amazon.webp`, alt: 'amazon' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/la-canasta.webp`, alt: 'la-canasta' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/agua-bonita.webp`, alt: 'agua-bonita' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/sargazo.webp`, alt: 'sargazo' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/aldea-avandaro.webp`, alt: 'aldea-avandaro' }
    ]

    return (
        <BannerDark>
            <div className={`${styles.sale_container}`}>
                <div className={styles.sale_text}>
                    <h3>Obten tu chocolate a través de nuestros distribuidores autorizados</h3>
                    <button>Quiero Chocolate</button>
                </div>
                <div className={styles.sale_img}>
                    {bags.map((bag, index) => (
                        <Image src={bag.src} alt={bag.alt} key={index} width={300} height={300} />
                    ))}
                </div>
                <button>Quiero Chocolate</button>
            </div>
        </BannerDark>
    )
}