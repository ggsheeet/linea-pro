import Link from 'next/link'
import Image from 'next/image'
import FooterLink from './footerLink'
import { LogoMain } from '../media'
import { FacebookSvg, InstaSvg } from '@/components/svg'
import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<div className={styles.footer_container}>
			<div className={styles.footer_content}>
				<div className={styles.footer_separation}>
					<div className={`${styles.footer_section} order-1 md:order-none`}>
						<Image src={LogoMain} alt='lp-logo' width={1200} height={630} />
					</div>
					<div className={`${styles.footer_section} order-4 md:order-none`}>
						<h5 className={styles.footer_headers}>NAVEGAR</h5>
						<Link href='/nosotros' className={styles.footer_nav}>
							Quienes somos
						</Link>
						<Link href='/trayectoria' className={styles.footer_nav}>
							Trayectoria
						</Link>
						<Link href='/compra' className={styles.footer_nav}>
							Quiero Chocolate
						</Link>
						<Link href='/blog' className={styles.footer_nav}>
							Blog
						</Link>
						<Link href='/contacto' className={styles.footer_nav}>
							Contáctanos
						</Link>
					</div>
					<div className={`${styles.footer_section} order-2 md:order-none`}>
						<h5 className={styles.footer_headers}>LEGAL</h5>
						<div className={styles.footer_legal}>
							<FooterLink href=''>Aviso de Privacidad</FooterLink>
						</div>
						<div className={styles.footer_legal}>
							<FooterLink href=''>© 2024 | All Rights Reserved</FooterLink>
						</div>
					</div>
					<div className={`${styles.footer_section} order-3 md:order-none`}>
						<h5 className={styles.footer_headers}>SOCIAL</h5>
						<div className={styles.footer_social}>
							<FooterLink href=''>
								<InstaSvg />
							</FooterLink>
							<FooterLink href=''>
								<FacebookSvg />
							</FooterLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
