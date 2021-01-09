import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
	root: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		background: '#f5f5f5',
	}
}))

const PageLayout = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{children}
		</div>
	)
}

export { PageLayout }