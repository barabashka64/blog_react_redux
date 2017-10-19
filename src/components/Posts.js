import React, { Component } from 'react'
import Post from './Post'

export default class Posts extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { posts, numberOfVisiblePosts, postsLength, postActions } = this.props
		let postsTemplate

		if (posts.length > 0) {
			postsTemplate = posts.map(function(item, index) {
				if (index < numberOfVisiblePosts) {
					return (
						<div key={index} >
							<Post item={item} postsLength={postsLength} posts={posts} postActions={postActions} numberOfVisiblePosts={numberOfVisiblePosts} />
							<hr />
						</div>	
					)
				}
				
			})
		} 

		return (
			<div className='container'>
				{postsTemplate}
				Показано {numberOfVisiblePosts} из {posts.length} постов.
			</div>
			)
	}
}