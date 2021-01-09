import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	root: {
		marginBottom: '1rem'
	},
	card: {
		display: 'flex',
		flexDirection: 'column'
	}
}));

const BlogPostCommentCard = ({ comment, onUpdate, onDelete }) => {
	const classes = useStyles();
	const [isEdit, setIsEdit] = useState(false);
	const [commentText, setCommentText] = useState(comment.text);
	const [commentName, setCommentName] = useState(comment.name);

	if (isEdit) {
		return (
			<Card className={classes.root}>
				<CardContent className={classes.card}>
					<TextField value={commentName}
						onChange={(e) => {
							setCommentName(e.target.value)
						}}
						variant="outlined" label="Comment name" size="small"
					/>
					<TextField value={commentText}
						onChange={(e) => { setCommentText(e.target.value) }}
						variant="outlined" style={{ marginTop: '1.6rem' }} multiline rows={4} label="Comment" size="small"
					/>
				</CardContent>
				<CardActions>
					<Button onClick={() => {
						setIsEdit(false);
						onUpdate(comment.id, { text: commentText, name: commentName });
					}} size="small" color="primary">
						Update
        		</Button>
				</CardActions>
			</Card>
		)
	}

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>{
					comment.name
				}</Typography>
				<Typography variant="body2" component="p">{
					comment.text
				}</Typography>

			</CardContent>
			<CardActions>
				<Button onClick={() => { setIsEdit(true) }} size="small" color="primary">
					Edit
        		</Button>
				<Button onClick={() => { onDelete(comment.id) }} size="small" color="primary">
					Delete
        		</Button>
			</CardActions>
		</Card>
	)
}

export { BlogPostCommentCard }