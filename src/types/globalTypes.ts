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
