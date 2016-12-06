import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from '../App'

import List from '../components/List'
import Profile from '../components/Profile'

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={List}></IndexRoute>
			<Route path='/profile/:profileId' component={Profile}></Route>
		</Route>
	</Router>
)

export default routes