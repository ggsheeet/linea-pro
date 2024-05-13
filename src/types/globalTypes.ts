export type LinkProps = {
	href: string
	children: React.ReactNode
	className?: string | undefined
}

export type DrawerProps = {
	isOpen: boolean
	toggleDrawer: () => void
}

export type WrapperProps = {
	children: React.ReactNode
}

export type RecipeProps = {
	title: string
	excerpt: string
	content?: string
	slug: string
	featuredImage: {
		node: {
			sourceUrl: string
			mediaDetails: {
				width: number
				height: number
			}
		}
	}
	tags?: {
		nodes: {
			name: string
		}[]
	}
}

export type DataContextProps = {
	recipes: RecipeProps[]
	loading: boolean
}
