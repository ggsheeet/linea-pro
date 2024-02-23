'use client'
import React from 'react'
import Image from 'next/image'
import { BannerLight } from '../bannerContainer/bannerLight'
import styles from './BannerWelcome.module.css'

export const BannerWelcome = () => {
    const bags = [
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/34%25.png`, alt: 'bolsa-34' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/38%25.png`, alt: 'bolsa-38' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/49%25.png`, alt: 'bolsa-49' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/64%25.png`, alt: 'bolsa-64' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/72%25.png`, alt: 'bolsa-72' },
        { src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/80%25.png`, alt: 'bolsa-80' }
    ]

    return (
        <BannerLight>
            <div className={styles.welcome}>
                <h2>Bienvenido a LÍNEA PRO</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <button>Conócenos</button>
            </div>
            <div className={styles.carousel_container}>
                    {[...Array(2)].map((_, index) => (
                        <ul key={index} className={styles.carousel_items}>
                            {bags.map((bag, index) => (
                                <li key={index}>
                                    <Image key={index} src={bag.src} alt={bag.alt} width={433} height={577} />
                                </li>
                            ))}
                        </ul>
                    ))}
            </div>
        </BannerLight>
    )
}
