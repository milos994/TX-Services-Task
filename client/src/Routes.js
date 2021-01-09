import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { ROUTES } from './consts/routes';
import { Blogposts } from './pages/Blogposts';
import { Home } from './pages/Home';


const Routes = () => {
	return (
		<Router basename='/'>
			<Switch>
				<Route exact path={ROUTES.MAIN} component={Home} />
				<Route exact path={ROUTES.BLOGPOST} component={Blogposts} />
				<Redirect to={ROUTES.MAIN} />
			</Switch>
		</Router>)
}

export { Routes }