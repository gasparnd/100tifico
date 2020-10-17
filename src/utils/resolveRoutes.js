const resolveRoutes = (route) => {
	if (route.length <= 3) {
		let validRout = route === '/' ? route : '/:id'
		return validRout
	}
	return `/${route}`
}

export default resolveRoutes