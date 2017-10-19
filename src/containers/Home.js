import React, { Component } from 'react'
import AddPostForm from '../components/AddPostForm'
import Posts from '../components/Posts'
import ShowMoreBtn from '../components/ShowMoreBtn'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postActions from '../actions/postActions'

export class App extends Component {

	submit = (values) => {
		const { numberOfVisiblePosts, posts, postActions } = this.props

		let maxId = 0

		for (let i = 0; i < posts.length; i++) {
			if (posts[i].id > maxId) maxId = posts[i].id
		}

		values.id = posts.length > 0 ? +maxId + 1 : 0
		let clone = {}
		for (let key in values) {
			clone[key] = values[key]
		}

		if (numberOfVisiblePosts < 3) {
			return (
				postActions.addPost(clone),
				postActions.setNumberOfVisiblePosts(numberOfVisiblePosts + 1)
			)
		} else {
			return postActions.addPost(clone)
		}
		
	}

	render() {
		const { numberOfVisiblePosts, posts, postActions } = this.props

		const postsLength = posts.length

		return <div className='container'>
			<AddPostForm onSubmit={this.submit} />
			<Posts posts={posts} postActions={postActions} postsLength={postsLength} numberOfVisiblePosts={numberOfVisiblePosts} />
			<hr />
			<div className='row justify-content-center'>
				<ShowMoreBtn numberOfVisiblePosts={numberOfVisiblePosts} postsLength={postsLength} postActions={postActions} />
			</div>
		</div>
	}
}

function mapStateToProps (state) {
	return {
		posts: state.posts.posts,
		numberOfVisiblePosts: state.posts.numberOfVisiblePosts
	}
}

function mapDispatchToProps(dispatch) {
	return {
		postActions: bindActionCreators(postActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)