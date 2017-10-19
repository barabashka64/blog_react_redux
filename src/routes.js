import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './containers/Home'
import PostDetails from './containers/PostDetails'
import NotFound from './components/NotFound'

export const routes = (
  <div>
		<Route path='/'>
			<IndexRoute component={Home} />
			<Route name='post' path='/posts/:id' component={PostDetails} />
		</Route>
		<Route path='*' component={NotFound} />
  </div>
)