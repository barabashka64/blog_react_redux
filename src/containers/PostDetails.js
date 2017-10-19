import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export class PostDetails extends Component {

	render() {
		const { posts } = this.props
		const { id } = this.props.params
	
		let thisPost

		for (let i = 0; i < posts.length; i++) {
			if (posts[i].id == id) thisPost = posts[i]
		}

		return (
			<div className='container'>
				<hr />
				<Link to='/'>На главную</Link>
				<hr />
				<h3>{thisPost.title}</h3>
				{thisPost.content}
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		posts: state.posts.posts,
	}
}

export default connect(mapStateToProps)(PostDetails)