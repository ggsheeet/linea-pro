'use client'
import React, { useEffect, useRef } from 'react'
import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './TextReveal.module.css'

gsap.registerPlugin(ScrollTrigger)

function TextReveal(): JSX.Element {
	const lettersRef = useRef<HTMLSpanElement[]>([])
	const triggerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!triggerRef.current) return

		const anim = gsap.to(lettersRef.current, {
			scrollTrigger: {
				trigger: triggerRef.current,
				scrub: true,
				start: 'top center',
				end: 'bottom 90%'
			},
			color: '#FFF',
            scrub: 1,
			duration: 5,
			stagger: 0.5
		})

		return () => {
			anim.kill()
		}
	}, [])

	const text =
		'LÍNEA PRO ES UNA MARCA 100% MEXICANA APASIONADA POR LAS RIQUEZAS DE NUESTRO PAÍS, DONDE HACEMOS DEL CACAO LA ESTRELLA DEL MOMENTO'

	return (
		<>
			<div className={styles.spacing_small}></div>
			<div className={styles.reveal}>
				<div ref={triggerRef}>
					{text.split('').map((letter, index) => (
						<span
							className={styles.reveal_text}
							key={index}
							ref={(el) => el && (lettersRef.current[index] = el)}
						>
							{letter}
						</span>
					))}
				</div>
			</div>
			<div className={styles.spacing}></div>
		</>
	)
}

export default TextReveal
