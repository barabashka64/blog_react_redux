import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Post extends Component {

	onDelBtnClick() {
		const { postActions, numberOfVisiblePosts, postsLength } = this.props

		postActions.deletePost(this.props.item.id)
		if (numberOfVisiblePosts == postsLength) postActions.setNumberOfVisiblePosts(numberOfVisiblePosts - 1)
	}

	render() {
		const { id, title, content } = this.props.item

			return (
				<div>
					<div className='float-right'>
						<button type='button' className='btn btn-danger btn-sm float-right' onClick={::this.onDelBtnClick} aria-hidden='true'>х</button>
					</div>
					<h4><Link to={'/posts/' + id}>{title}</Link></h4>
					<p>{content}</p>
				</div>
			)
	}
}
