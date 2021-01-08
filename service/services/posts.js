const postsCollection = require('../collections/posts');
const NotFoundError = require('../errors/notFound');

/**
 * @description Posts Service
 *
 * @class PostsService
 */
class PostsService {
	/**
	 * @description Get all posts.
	 *
	 * @static
	 * @returns {Array} List of all available posts.
	 * @memberof PostsService
	 */
	static getAllPosts() {
		return postsCollection.findAll();
	}

	/**
	 * @description Get post by id.
	 *
	 * @static
	 * @param {String} id Post id.
	 * @returns {Object} Post data.
	 * @memberof PostsService
	 */
	static getPost(id) {
		const post = postsCollection.findById(id);

		if (!post) {
			throw new NotFoundError(`Post with id: ${id} not found.`)
		}

		return post;
	}

	/**
	 * @description Create post.
	 *
	 * @static
	 * @param {Object} data Data for creating post.
	 * @returns {Object} New created post.
	 * @memberof PostsService
	 */
	static createPost(data) {
		return postsCollection.create({
			title: data.title,
			text: data.text
		});
	}

	/**
	 * @description Update post by id.
	 *
	 * @static
	 * @param {String} id Post id.
	 * @param {Object} data Data for update.
	 * @returns {Object} Updated post.
	 * @memberof PostsService
	 */
	static updatePost(id, data) {
		const post = PostsService.getPost(id);

		if (data.title) {
			post.title = data.title;
		}

		if (data.text) {
			post.text = data.text;
		}

		return post;
	}

	/**
	 * @description Delete post by id.
	 *
	 * @static
	 * @param {String} id Post id.
	 * @returns {String} Message whether is post deleted or not.
	 * @memberof PostsService
	 */
	static deletePost(id) {
		const post = PostsService.getPost(id);

		return postsCollection.destroy(post.id);
	}
};

module.exports = PostsService;