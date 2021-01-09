const Router = require('express').Router();
const { v4: uuid, validate } = require('uuid');

const CommentsService = require('../services/comments');
const PostsService = require('../services/posts');

const BadRequestError = require('../errors/badRequest');
const NotFoundError = require('../errors/notFound');

Router.get('/posts/:postId/comments', (req, res, next) => {
	try {
		const {
			params: {
				postId,
			},
		} = req;

		if (!validate(postId)) {
			throw new BadRequestError('PostId must be a valid uuid.')
		}

		const post = PostsService.getPost(postId); // Will throw an error if post doesn't exists
		const postComments = CommentsService.getAllPostComments(post.id);

		res.send(postComments);
	} catch (err) {
		return next(err);
	}
});

Router.post('/posts/:postId/comments', (req, res, next) => {
	try {
		const {
			params: {
				postId,
			},
			body: {
				name,
				text,
			},
		} = req;

		if (!validate(postId)) {
			throw new BadRequestError('PostId must be a valid uuid.')
		}

		if (!text) {
			throw new BadRequestError('Text is required.')
		}

		const post = PostsService.getPost(postId); // Will throw an error if post doesn't exists
		const newPostComment = CommentsService.createPostComment({
			name,
			text,
			postId: post.id
		});

		res.send(newPostComment);
	} catch (err) {
		return next(err);
	}
});

Router.get('/comments/:commentId', (req, res, next) => {
	try {
		const {
			params: {
				commentId,
			},
		} = req;

		if (!validate(commentId)) {
			throw new BadRequestError('CommentId must be a valid uuid.')
		}

		const comment = CommentsService.getComment(commentId);
		res.send(comment);
	} catch (err) {
		return next(err);
	}
});

Router.put('/comments/:commentId', (req, res, next) => {
	try {
		const {
			params: {
				commentId,
			},
			body: {
				name,
				text,
			},
		} = req;

		if (!validate(commentId)) {
			throw new BadRequestError('CommentId must be a valid uuid.')
		}

		const updatedPostComment = CommentsService.updatePostComment(commentId, { name, text });
		res.send(updatedPostComment);
	} catch (err) {
		return next(err);
	}
});

Router.delete('/comments/:commentId', (req, res, next) => {
	try {
		const {
			params: {
				commentId,
			},
		} = req;

		if (!validate(commentId)) {
			throw new BadRequestError('CommentId must be a valid uuid.')
		}

		const isDeleted = CommentsService.deleteComment(commentId);

		const message = isDeleted ? 'Resource deleted' : 'Resource not deleted';

		res.send({ message });
	} catch (err) {
		return next(err);
	}
});

module.exports = Router;