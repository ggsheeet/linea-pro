export const menuLinks = [
	{ name: 'Quienes Somos', href: '/nosotros' },
	// { name: 'Trayectoria', href: '/trayectoria' },
	{ name: 'Quiero Chocolate', href: '/comprar' },
	// { name: 'Blog', href: '/blog' },
	// { name: 'Contacto', href: '/contacto' }
]

export const heroImgs = [
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-imgs/choc-finca.webp`,
		alt: 'lp-finca',
		width: 5472,
		height: 3648,
		href: '/nosotros'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-imgs/choc-sir.webp`,
		alt: 'lp-señor',
		width: 2645,
		height: 1889,
		href: '/trayectoria'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-imgs/choc-coins.webp`,
		alt: 'lp-monedas',
		width: 1060,
		height: 749,
		href: '/comprar'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-imgs/choc-net.webp`,
		alt: 'lp-granos',
		width: 2738,
		height: 1825,
		href: '/blog'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-imgs/choc-tree.webp`,
		alt: 'lp-tree',
		width: 5472,
		height: 3648,
		href: '/contacto'
	}
]

export const heroCTAs = [
	{ name: 'Nosotros', href: '/nosotros' },
	{ name: 'Trayectoria', href: '/trayectoria' },
	{ name: 'Compra tu chocolate', href: '/comprar' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contáctanos', href: '/contacto' }
]

export const distribuitors = [
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/chocosolutions.webp`,
		alt: 'chocosolutions'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/central-gourmet.webp`,
		alt: 'central-gourmet'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/cacao-house.webp`,
		alt: 'cacao-house'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/amazon.webp`,
		alt: 'amazon'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/la-canasta.webp`,
		alt: 'la-canasta'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/agua-bonita.webp`,
		alt: 'agua-bonita'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/sargazo.webp`,
		alt: 'sargazo'
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-distribuitors/aldea-avandaro.webp`,
		alt: 'aldea-avandaro'
	}
]

export const bags = [
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/34+.webp`,
		alt: 'bolsa-34',
		width: 433,
		height: 577
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/38+.webp`,
		alt: 'bolsa-38',
		width: 433,
		height: 577
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/49+.webp`,
		alt: 'bolsa-49',
		width: 433,
		height: 577
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/64.webp`,
		alt: 'bolsa-64',
		width: 433,
		height: 577
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/72+.webp`,
		alt: 'bolsa-72',
		width: 433,
		height: 577
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/74.webp`,
		alt: 'bolsa-74',
		width: 433,
		height: 577
	},
	{
		src: `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}lp-bags/80+.webp`,
		alt: 'bolsa-80',
		width: 433,
		height: 577
	}
]

export const apps = [
	{
		title: 'Melters',
		description: 'Barras plana, o con inclusiones, Barks, Monedas...'
	},
	{
		title: 'Pastelería',
		description: 'Ganache para relleno o cubierta, Figuras, Texturas, Decoración...'
	},
	{
		title: 'Panadería',
		description: 'Mousses, Cremas, Salsas, Coulis...'
	},
	{
		title: 'Chocolatería Fina',
		description: 'Bombones, Trufas, Macarrones...'
	},
	{
		title: 'Cata Maridaje',
		description: 'Con Vinos, Licores, Café, Quesos...'
	},
	{
		title: 'Bebidas',
		description: 'Blends, Mocha, Bebida Europea...'
	},
	{
		title: 'Heladería',
		description: 'Como Ingrediente o Topping...'
	}
]

export const bagCards = [
	{
		imgSrc: `${bags[1].src}`,
		imgAlt: `${bags[1].alt}`,
		imgW: bags[1].width,
		imgH: bags[1].height,
		href: 'https://www.amazon.com.mx/CHOCOLATE-CHELO-CARAMELO-BLANCO-CARAMELIZADO/dp/B0CKWNT78V/ref=sr_1_2?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20COR6QK1RCGI&dib=eyJ2IjoiMSJ9.RskUaYBOuGXMB9jJkHvurj6p4flK_0_eoi2ml7kugk0WTnBD3P8Txajh5aQUqnvsSK5wnJzptbgQKccyFBFAl3BERSaPHRotfU23TA1ob1O8cNF4R1b4rnyckCnbnobfNH_QxZvUkN5Rl_HdzksbbNQ15fz0TTnt5M-xwlnhObOuAMcqd2z90kPLRKofR7DZhlaattU76qy9EqaUyaaJbxpgygMp-8iA7Ji3Dw7ndyDGlFbI75SpJtjWwte7SNYIuU0NH2dt176AEAC_wfxlgFsgqnyrSqTABUcfhJ-K8C8.KqZpZfA_Z72VID8HRI5rMLjg4LWLWZmTIfkOQCHlOVM&dib_tag=se&keywords=wolter+chocolate&qid=1709940981&s=grocery&sprefix=wolter+chocolate%2Cgrocery%2C100&sr=1-2&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
		name: 'Chelo Caramelo 38%',
		description: 'Chocolate rubio de notas lácticas, de caramelo y dulce de leche. ',
		price: '$1,399 MXN'
	},
	{
		imgSrc: `${bags[2].src}`,
		imgAlt: `${bags[2].alt}`,
		imgW: bags[2].width,
		imgH: bags[2].height,
		href: 'https://www.amazon.com.mx/CALLETS-CHOCOLATE-LECHE-WOLTER-FINCA/dp/B0CJ46LK31/ref=sr_1_5?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20COR6QK1RCGI&dib=eyJ2IjoiMSJ9.RskUaYBOuGXMB9jJkHvurj6p4flK_0_eoi2ml7kugk0WTnBD3P8Txajh5aQUqnvsSK5wnJzptbgQKccyFBFAl3BERSaPHRotfU23TA1ob1O8cNF4R1b4rnyckCnbnobfNH_QxZvUkN5Rl_HdzksbbNQ15fz0TTnt5M-xwlnhObOuAMcqd2z90kPLRKofR7DZhlaattU76qy9EqaUyaaJbxpgygMp-8iA7Ji3Dw7ndyDGlFbI75SpJtjWwte7SNYIuU0NH2dt176AEAC_wfxlgFsgqnyrSqTABUcfhJ-K8C8.KqZpZfA_Z72VID8HRI5rMLjg4LWLWZmTIfkOQCHlOVM&dib_tag=se&keywords=wolter+chocolate&qid=1709942413&s=grocery&sprefix=wolter+chocolate%2Cgrocery%2C100&sr=1-5&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
		name: 'Leche 49%',
		description: 'Alto sabor a cacao con notas lácticas, sabores terrosos de nueces y avellanas. Elaborado con pasta de cacao trivarietal de Tabasco. ',
		price: '$1,149 MXN'
	},
	{
		imgSrc: `${bags[3].src}`,
		imgAlt: `${bags[3].alt}`,
		imgW: bags[3].width,
		imgH: bags[3].height,
		href: 'https://www.amazon.com.mx/CALLETS-CHOCOLATE-SEMIAMARGO-WOLTER-2-5KG/dp/B0CJ486M78/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20COR6QK1RCGI&dib=eyJ2IjoiMSJ9.RskUaYBOuGXMB9jJkHvurj6p4flK_0_eoi2ml7kugk0WTnBD3P8Txajh5aQUqnvsSK5wnJzptbgQKccyFBFAl3BERSaPHRotfU23TA1ob1O8cNF4R1b4rnyckCnbnobfNH_QxZvUkN5Rl_HdzksbbNQ15fz0TTnt5M-xwlnhObOuAMcqd2z90kPLRKofR7DZhlaattU76qy9EqaUyaaJbxpgygMp-8iA7Ji3Dw7ndyDGlFbI75SpJtjWwte7SNYIuU0NH2dt176AEAC_wfxlgFsgqnyrSqTABUcfhJ-K8C8.KqZpZfA_Z72VID8HRI5rMLjg4LWLWZmTIfkOQCHlOVM&dib_tag=se&keywords=wolter+chocolate&qid=1709942413&s=grocery&sprefix=wolter+chocolate%2Cgrocery%2C100&sr=1-3&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
		name: 'Semiamargo 64%',
		description: 'Chocolate con notas de nueces y frutas tropicales con un balance entre lo dulce y lo amargo. Elaborado con pasta de cacao trivarietal de Tabasco.',
		price: '$1,149 MXN'
	},
	{
		imgSrc: `${bags[5].src}`,
		imgAlt: `${bags[5].alt}`,
		imgW: bags[5].width,
		imgH: bags[5].height,
		href: 'https://www.amazon.com.mx/CHOCOLATE-OSCURO-SIERRA-TABASCO-CHIAPAS/dp/B0CSPQ3QFB/ref=sr_1_4?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20COR6QK1RCGI&dib=eyJ2IjoiMSJ9.RskUaYBOuGXMB9jJkHvurj6p4flK_0_eoi2ml7kugk0WTnBD3P8Txajh5aQUqnvsSK5wnJzptbgQKccyFBFAl3BERSaPHRotfU23TA1ob1O8cNF4R1b4rnyckCnbnobfNH_QxZvUkN5Rl_HdzksbbNQ15fz0TTnt5M-xwlnhObOuAMcqd2z90kPLRKofR7DZhlaattU76qy9EqaUyaaJbxpgygMp-8iA7Ji3Dw7ndyDGlFbI75SpJtjWwte7SNYIuU0NH2dt176AEAC_wfxlgFsgqnyrSqTABUcfhJ-K8C8.KqZpZfA_Z72VID8HRI5rMLjg4LWLWZmTIfkOQCHlOVM&dib_tag=se&keywords=wolter+chocolate&qid=1709942413&s=grocery&sprefix=wolter+chocolate%2Cgrocery%2C100&sr=1-4&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
		name: 'Sierra 74%',
		description: 'Chocolate fino de aroma con notas de sabor a ciruela y tabaco con agradable acidez. Elaborado con una mezcla de variedad de cacaos trinitarios de la Sierra ubicada entre Tabasco y Chiapas.',
		price: '$1,125 MXN'
	},
	{
		imgSrc: `${bags[6].src}`,
		imgAlt: `${bags[6].alt}`,
		imgW: bags[6].width,
		imgH: bags[6].height,
		href: 'https://www.amazon.com.mx/CALLETS-CHOCOLATE-OSCURO-WOLTER-HACIENDA/dp/B0CDFJKTXC/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=20COR6QK1RCGI&dib=eyJ2IjoiMSJ9.RskUaYBOuGXMB9jJkHvurj6p4flK_0_eoi2ml7kugk0WTnBD3P8Txajh5aQUqnvsSK5wnJzptbgQKccyFBFAl3BERSaPHRotfU23TA1ob1O8cNF4R1b4rnyckCnbnobfNH_QxZvUkN5Rl_HdzksbbNQ15fz0TTnt5M-xwlnhObOuAMcqd2z90kPLRKofR7DZhlaattU76qy9EqaUyaaJbxpgygMp-8iA7Ji3Dw7ndyDGlFbI75SpJtjWwte7SNYIuU0NH2dt176AEAC_wfxlgFsgqnyrSqTABUcfhJ-K8C8.KqZpZfA_Z72VID8HRI5rMLjg4LWLWZmTIfkOQCHlOVM&dib_tag=se&keywords=wolter+chocolate&qid=1709942413&s=grocery&sprefix=wolter+chocolate%2Cgrocery%2C100&sr=1-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47',
		name: 'Wolter 80%',
		description: 'Chocolate con notas amaderadas, nuez de castilla y aceituna negra. Elaborado con una mezcla de cacaos de nuestra propia plantación en Comalcalco, Tabasco. ',
		price: '$1,249 MXN'
	}
]
