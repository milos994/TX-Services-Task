import React from 'react';
import { generatePath } from 'react-router-dom';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { ROUTES } from '../../consts/routes';

const useStyles = makeStyles(() => ({
	root: {
		width: '50%',
		background: '#fff',
		padding: '1.6rem',
	}
}));

const BlogPostsList = ({ blogposts = [] }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component='nav' aria-labelledby="blogposts-list">
				{
					blogposts.map(blogpost => (
						<ListItem component='a' key={blogpost.id} href={generatePath(ROUTES.BLOGPOST, { id: blogpost.id })} button>
							<ListItemText primary={blogpost.title} />
							<ListItemSecondaryAction>
								<Badge badgeContent={blogpost.commentsCount} color="primary">
									<CommentIcon />
								</Badge>
							</ListItemSecondaryAction>
						</ListItem>
					))
				}
			</List>
		</div>
	)
}

export { BlogPostsList }