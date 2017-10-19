export const loadState = () => {
	try {
		const serializedSted = localStorage.getItem('state')
		if (serializedSted === null) {
			return undefined
		}
		return JSON.parse(serializedSted)
	} catch (err) {
		return undefined
	}
}

export const saveState = (state) => {
	try {
		const serializedSted = JSON.stringify(state)
		localStorage.setItem('state', serializedSted)
	} catch (err) {
		//ignore
	}
}