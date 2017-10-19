export function deletePost(id) {
	return {
		type: 'DELETE_POST',
		payload: {
			id: id	
		}
	}
}

export function addPost(post) {
	return {
		type: 'ADD_POST',
		payload: {
			post: post	
		}
	}
}

export function setNumberOfVisiblePosts(num) {
	return {
		type: 'SET_NUMBER_OF_VISIBLE_POSTS',
		payload: {
			num: num	
		}
	}
}