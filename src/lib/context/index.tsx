'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getRecipes } from '../blogQueries'
import { DataContextProps } from '@/types/globalTypes'

const DataContext = createContext<DataContextProps>({
	recipes: [],
	loading: true
})

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = useState(true)
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		let isMounted = true

		const fetchData = async () => {
			try {
				const recipesFetched = await getRecipes()

				if (isMounted) {
					setRecipes(recipesFetched)
					setLoading(false)
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<DataContext.Provider value={{ recipes, loading }}>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => {
	const context = useContext(DataContext)
	if (!context) {
		throw new Error('useData must be used within a DataProvider')
	}
	return context
}
