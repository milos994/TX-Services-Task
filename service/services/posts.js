const postsCollection = require('../collections/posts');
const NotFoundError = require('../errors/notFound');

class PostsService {
	static getAllPosts() {
		return postsCollection.findAll();
	}

	static getPost(id) {
		const post = postsCollection.findById(id);

		if (!post) {
			throw new NotFoundError(`Post with id: ${id} not found.`)
		}

		return post;
	}

	static createPost(data) {
		return postsCollection.create({ title: data.title });
	}

	static updatePost(id, data) {
		const post = PostsService.getPost(id);

		if (data.title) {
			post.title = data.title;
		}

		return post;
	}

	static deletePost(id) {
		const post = PostsService.getPost(id);

		return postsCollection.destroy(post.id);
	}
};

module.exports = PostsService;