import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AppOrAuth from './auth-or-app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billing-cycle/billing-cycle'

export default props => (
	<Router history={hashHistory}>
		<Route path='/' component={AppOrAuth}>
			<IndexRoute component={Dashboard} />
			<Route path='billing-cycles' component={BillingCycle} />
		</Route>
		<Redirect path='*' to='/' />
	</Router>
)