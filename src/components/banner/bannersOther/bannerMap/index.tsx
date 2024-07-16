'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BannerLightOther } from '../../bannerContainers/bannerLightOther'
import { MapDistributors } from '@/components/media'
import {
	LaCanastaNeg,
	ChocoSolutionsNeg,
	ElSargazoNeg,
	CacaoHouseNeg,
	AguaBonitaNeg
} from '@/components/media'
import styles from './BannerMap.module.css'

const BannerMap = () => {
	const [openModal, setOpenModal] = useState<number>(1)

	const handleOpenModal = (index: number) => {
		setOpenModal(index)
	}

	const targets = [
		{
			id: 'bc',
			classOuterInactive: styles.map_target_bc,
			classInnerInactive: styles.target_bullseye,
			classOuterActive: styles.map_target_active_bc,
			classInnerActive: styles.target_bullseye_active,
			classModal: styles.modal_bc,
			classActiveModal: styles.modal_active_bc,
			classLocation: styles.map_location_bc,
			modalSelection: [
				{
					name: 'La Canasta',
					address: 'Cuarta 2048,\n Granados, Ensenada',
					link: 'https://www.facebook.com/lacanastaens/?locale=es_LA'
				}
			],
			location: 'BC'
		},
		{
			id: 'mty',
			classOuterInactive: styles.map_target_mty,
			classInnerInactive: styles.target_bullseye,
			classOuterActive: styles.map_target_active_mty,
			classInnerActive: styles.target_bullseye_active,
			classModal: styles.modal_mty,
			classActiveModal: styles.modal_active_mty,
			classLocation: styles.map_location_mty,
			modalSelection: [
				{
					name: 'chocosolutions',
					address: 'Calz. San Pedro 200-A,\n Miravalle, Monterrey',
					link: 'https://chocosolutions.com/search?type=product&options%5Bprefix%5D=last&options%5Bunavailable_products%5D=last&q=wolter'
				}
			],
			location: 'MTY'
		},
		{
			id: 'cdmx',
			classOuterInactive: styles.map_target_cdmx,
			classInnerInactive: styles.target_bullseye,
			classOuterActive: styles.map_target_active_cdmx,
			classInnerActive: styles.target_bullseye_active,
			classModal: styles.modal_cdmx,
			classActiveModal: styles.modal_active_cdmx,
			classLocation: styles.map_location_cdmx,
			modalSelection: [
				{
					name: 'El Sargazo',
					address: 'Sierra Santa Rosa 49,\n Reforma Social, CDMX',
					link: 'https://sargazo.com/'
				},
				{
					name: 'Cacao House',
					address: 'Av. Stim 86,\n Lomas del Chamizal,CDMX',
					link: 'https://www.cacao-house.mx/search?q=wolter&options%5Bprefix%5D=last'
				},
				{
					name: 'Agua Bonita',
					address: 'Calle 21 109,\n San Pedro de los Pinos, CDMX',
					link: 'https://www.facebook.com/QuieroAguaBonita/'
				}
			],
			location: 'CDMX'
		}
	]

	const distImgs = [
		{
			id: 'la-canasta',
			src: LaCanastaNeg,
			alt: 'la-canasta-logo',
			width: 339,
			height: 400,
			positionStyle: styles.map_la_canasta
		},
		{
			id: 'chocosoluitions',
			src: ChocoSolutionsNeg,
			alt: 'chocosolutions-logo',
			width: 249,
			height: 308,
			positionStyle: styles.map_chocosolutions
		},
		{
			id: 'el-sargazo',
			src: ElSargazoNeg,
			alt: 'el-sargazo-logo',
			width: 403,
			height: 304,
			positionStyle: styles.map_el_sargazo
		},
		{
			id: 'cacao-house',
			src: CacaoHouseNeg,
			alt: 'cacao-house-logo',
			width: 308,
			height: 305,
			positionStyle: styles.map_cacao_house
		},
		{
			id: 'agua-bonita',
			src: AguaBonitaNeg,
			alt: 'agua-bonita-logo',
			width: 299,
			height: 314,
			positionStyle: styles.map_agua_bonita
		}
	]

	return (
		<BannerLightOther>
			<h3 className={styles.map_title}>Distribuidores</h3>
			<div className={styles.map_img}>
				<Image
					src={MapDistributors}
					alt='distributor map'
					width={1330}
					height={1114}
				/>
				{targets.map((target, index) => (
					<React.Fragment key={target.id}>
						<div
							className={`${
								index === openModal
									? target.classOuterActive
									: target.classOuterInactive
							}`}
							onClick={() => handleOpenModal(index)}
						>
							<i
								className={`${
									index === openModal
										? target.classInnerActive
										: target.classInnerInactive
								}`}
							/>
							<div
								className={`${target.classModal} ${styles.modal_text}
								${index === openModal ? target.classActiveModal : styles.modal_inactive} `}
							>
								{target.modalSelection.map((distributor, index) => (
									<React.Fragment key={index}>
										<h5>
											<Link
												href={distributor.link}
												target='_blank'
												rel='noopener noreferrer'
											>
												{distributor.name}
											</Link>
										</h5>
										{distributor.address.split('\n').map((string, index) => (
											<p key={index}>{string}</p>
										))}
									</React.Fragment>
								))}
							</div>
						</div>
						<h4 className={target.classLocation}>{target.location}</h4>
					</React.Fragment>
				))}
				{distImgs.map((distributor) => (
					<Image
						key={distributor.id}
						src={distributor.src}
						width={distributor.width}
						height={distributor.height}
						alt={distributor.alt}
						className={`${styles.map_distributor} ${distributor.positionStyle}`}
					/>
				))}
			</div>
		</BannerLightOther>
	)
}
export default BannerMap
