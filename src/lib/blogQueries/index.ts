export const getRecipes = async () => {
	try {
		const headers = {
			'Content-Type': 'application/json'
		}
		const requestBody = {
			query: `query GetPosts {
            posts(where: {status: PUBLISH}) {
                nodes {
                    title
                    excerpt
                    slug
                    tags {
                        nodes {
                            name
                        }
                    }
                    featuredImage {
                        node {
                            sourceUrl
                            mediaDetails {
                                width
                                height
                            }
                        }
                    }
                }
            }
        }`,
			fetchPolicy: 'network-only'
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_WP_GQL_URL}/graphql`, {
			method: 'POST',
			headers,
			body: JSON.stringify(requestBody)
		})

		if (!res.ok) {
			throw new Error(`Failed to fetch Blog Posts: ${res.statusText}`)
		}
		const resJSON = await res.json()
		const data = resJSON.data.posts.nodes
		console.log(data)
		return data
	} catch (error) {
		console.error(`Error fetching Blog Posts:`, error)
		return []
	}
}

export const getSingleRecipe = async (id: string) => {
	try {
		const headers = {
			'Content-Type': 'application/json'
		}
		const requestBody = {
			query: `query GetSinglePost($id: ID!) {
                post(id: $id, idType: SLUG) {
                    title
                    excerpt
                    content
                    tags {
                        nodes {
                            name
                        }
                    }
                    featuredImage {
                        node {
                            sourceUrl
                            mediaDetails {
                                width
                                height
                            }
                        }
                    }
                  }
        }`,
			fetchPolicy: 'network-only',
			variables: { id }
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_WP_GQL_URL}/graphql`, {
			method: 'POST',
			headers,
			body: JSON.stringify(requestBody)
		})

		if (!res.ok) {
			throw new Error(`Failed to fetch Blog Post: ${res.statusText}`)
		}
		const resJSON = await res.json()
		const data = resJSON.data
		return data.post
	} catch (error) {
		console.error(`Error fetching Blog Posts:`, error)
		return []
	}
}
