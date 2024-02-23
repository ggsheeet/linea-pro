import React from 'react'
import Image from 'next/image'
import styles from './HeroImg.module.css'

export const HeroImg = () => {
    const HeroImgOne = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-imgs/choc-grain.webp`

    return (
        <>
            <Image alt='hero image one' src={HeroImgOne} loading='eager' priority className={styles.hero_img} width={5472} height={3648} />
        </>
    )
}
