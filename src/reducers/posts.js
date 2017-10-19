const initialState = {
	posts: [
		{
			id: 0,
			title: 'Привет',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos explicabo minima ex vel ut deserunt distinctio provident quo eaque hic quisquam, itaque blanditiis debitis, in adipisci est maxime at iste.'
		},
		{
			id: 1,
			title: 'Пока',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos explicabo minima ex vel ut deserunt distinctio provident quo eaque hic quisquam, itaque blanditiis debitis, in adipisci est maxime at iste.'
		}
	],
	numberOfVisiblePosts: 2
}

export default function posts(state = initialState, action) {

	switch (action.type) {
		case 'DELETE_POST':
			return {...state,
				posts: state.posts.filter(item => item.id !== action.payload.id)
			}

		case 'ADD_POST':
			return {...state,
				posts: state.posts.concat(action.payload.post)
			}

		case 'SET_NUMBER_OF_VISIBLE_POSTS':
			return {...state,
				numberOfVisiblePosts: action.payload.num
			}

		default:
			return state;
	}
}