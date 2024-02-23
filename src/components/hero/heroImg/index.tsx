import React from 'react'
import Image from 'next/image'
import styles from './HeroImg.module.css'

export const HeroImg = () => {
    const HeroImgOne = `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-imgs/choc-coins.webp`

    return (
        <>
            <Image alt='hero image one' src={HeroImgOne} loading='eager' priority className={styles.hero_img} width={1060} height={749} />
        </>
    )
}
