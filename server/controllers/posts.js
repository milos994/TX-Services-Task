const Router = require('express').Router();
const { v4: uuid, validate } = require('uuid');

const PostsService = require('../services/posts');

const BadRequestError = require('../errors/badRequest');

Router.get('/posts', (req, res, next) => {
	try {
		const posts = PostsService.getAllPosts();

		res.send(posts);
	} catch (err) {
		return next(err);
	}
});

Router.get('/posts/:postId', (req, res, next) => {
	try {
		const {
			params: {
				postId,
			},
		} = req;

		if (!validate(postId)) {
			throw new BadRequestError('PostId must be a valid uuid.')
		}

		const post = PostsService.getPost(postId);

		res.send(post);
	} catch (err) {
		return next(err);
	}
});

Router.post('/posts', (req, res, next) => {
	try {
		const {
			body: {
				title,
				text,
			},
		} = req;

		if (!title) {
			throw new BadRequestError('Title is required.')
		}

		const newPost = PostsService.createPost({ title, text });
		res.send(newPost);
	} catch (err) {
		return next(err);
	}
});

Router.put('/posts/:postId', (req, res, next) => {
	try {
		const {
			params: {
				postId,
			},
			body: {
				title,
				text,
			},
		} = req;

		if (!validate(postId)) {
			throw new BadRequestError('PostId must be a valid uuid.')
		}

		const updatedPost = PostsService.updatePost(postId, { title, text });
		res.send(updatedPost);
	} catch (err) {
		return next(err);
	}
});

Router.delete('/posts/:postId', (req, res, next) => {
	try {
		const {
			params: {
				postId,
			},
		} = req;

		if (!validate(postId)) {
			throw new BadRequestError('PostId must be a valid uuid.')
		}

		const isDeleted = PostsService.deletePost(postId);

		const message = isDeleted ? 'Resource deleted' : 'Resource not deleted';

		res.send({ message });
	} catch (err) {
		return next(err);
	}
});

module.exports = Router;