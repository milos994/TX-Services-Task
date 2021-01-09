import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../api/posts';
import {
	createOneComment,
	getAllPostComments,
	updateComment,
	deleteComment
} from '../../api/comments';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { BlogPostCommentCard } from './BlogPostCommentCard';


const useStyles = makeStyles(() => ({
	root: {
		width: '50%',
		background: '#fff',
		padding: '1.6rem'
	}
}));

const BlogPostCommentsList = () => {
	const classes = useStyles();
	const [blogpost, setBlogpost] = useState(null);
	const [comments, setComments] = useState([]);
	const [commentName, setCommentName] = useState('');
	const [commentText, setCommentText] = useState('');
	const { id } = useParams();

	useEffect(() => {
		getOnePost(id).then(res => {
			setBlogpost(res.data);
		})
		getAllPostComments(id).then(res => {
			setComments(res);
		})
	}, [])

	const onCreate = () => {
		createOneComment(id, {
			text: commentText,
			name: commentName,
		}).then(res => {
			setComments([...comments, res.data]);
		})

		setCommentText('')
		setCommentName('');
	}

	const onUpdate = (id, { text, name }) => {
		updateComment(id, { text, name }).then(res => {
			setComments(comments.map((comment) => {
				if (res.data.id === comment.id) {
					return res.data;
				} else {
					return comment;
				}
			}))
		});
	}

	const onDelete = (id) => {
		deleteComment(id).then(() => setComments(comments.filter(comment => comment.id !== id)));
	}

	if (!blogpost) {
		return null;
	}

	return (
		<div className={classes.root}>
			<Typography variant="h4" component="h4">
				{blogpost.title}
			</Typography>
			<Typography variant="body1" component="p">
				{blogpost.text}
			</Typography>

			<div style={{ paddingTop: '2rem' }}>
				{
					comments.map(comment => (
						<BlogPostCommentCard key={comment.id} onUpdate={onUpdate} onDelete={onDelete} comment={comment} />
					))
				}
			</div>

			<div style={{ marginTop: '4rem', display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
				<TextField value={commentName} onChange={(e) => setCommentName(e.target.value)} variant="outlined" label="Comment name" size="small" />
				<TextField value={commentText} onChange={(e) => setCommentText(e.target.value)} style={{ marginTop: '1.6rem' }} multiline rows={4} variant="outlined" label="Comment" size="small" />
				<Button onClick={onCreate} style={{ marginTop: '1.6rem' }} variant='contained' color='primary'>Submit</Button>
			</div>
		</div>
	)
}

export { BlogPostCommentsList }