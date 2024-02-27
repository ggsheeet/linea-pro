import React from 'react'
import { FirstButton, SecondButton } from './buttonCTA'
import styles from './HeroCTA.module.css'

export const HeroCTA = () => {
	return (
		<div className={styles.hero_text}>
			<h1 data-aos='fade-up' data-aos-offset='300'>
				Un slogan o mensaje insiprador o así
			</h1>
			{/* <div className={styles.button_group} data-aos="fade-up" data-aos-offset="200">
                <FirstButton />
                <SecondButton />
            </div> */}
		</div>
	)
}
