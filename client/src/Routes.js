import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { ROUTES } from './constants/routes';
import { Blogpost } from './pages/Blogpost';
import { Home } from './pages/Home';


const Routes = () => {
	return (
		<Router basename='/'>
			<Switch>
				<Route exact path={ROUTES.MAIN} component={Home} />
				<Route exact path={ROUTES.BLOGPOST} component={Blogpost} />
				<Redirect to={ROUTES.MAIN} />
			</Switch>
		</Router>)
}

export { Routes }