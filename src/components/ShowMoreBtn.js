import React, { Component } from 'react'

export default class ShowMoreBtn extends Component {

	onBtnClick() {
		const { numberOfVisiblePosts, postsLength, postActions} = this.props

		if (numberOfVisiblePosts < postsLength - 3) { 
			postActions.setNumberOfVisiblePosts(numberOfVisiblePosts + 3)
		} else {
			postActions.setNumberOfVisiblePosts(postsLength)
		}

	}

	render() {
		const { numberOfVisiblePosts, postsLength } = this.props

		return (
			<button disabled={numberOfVisiblePosts == postsLength} type='button' className='btn btn-warning btn-sm' onClick={::this.onBtnClick} aria-hidden='true'>Показать еще</button>
		)
	}
}
