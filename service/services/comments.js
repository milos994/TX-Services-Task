const commentsCollection = require('../collections/comments');
const NotFoundError = require('../errors/notFound');

/**
 * @description Comments Service
 *
 * @class CommentsService
 */
class CommentsService {
	/**
	 * @description Get all comments by postId.
	 *
	 * @static
	 * @param {String} postId Post Id.
	 * @returns {Array} List of all available post comments.
	 * @memberof CommentsService
	 */
	static getAllPostComments(postId) {
		return commentsCollection.entries.filter((entry) => entry.postId === postId);
	}

	/**
	 * @description Get post comment by id.
	 *
	 * @static
	 * @param {String} id comment id.
	 * @returns {Object} Comment data.
	 * @memberof CommentsService
	 */
	static getComment(id) {
		const comment = commentsCollection.findById(id);

		if (!comment) {
			throw new NotFoundError(`Comment with id: ${id} not found.`)
		}

		return comment;
	}


	/**
	 * @description Create comment for post.
	 *
	 * @static
	 * @param {Object} data Data for creating post comment.
	 * @returns {Object} New created post.
	 * @memberof CommentsService
	 */
	static createPostComment(data) {
		return commentsCollection.create({
			text: data.text,
			name: data.name || null,
			postId: data.postId,
		});
	}

	/**
	 * @description Update post comment.
	 *
	 * @static
	 * @param {String} id Comment id.
	 * @param {Object} data Data for update.
	 * @returns {Object} Updated post comment.
	 * @memberof CommentsService
	 */
	static updatePostComment(id, data) {
		const comment = CommentsService.getComment(id);

		if (data.text) {
			comment.text = data.text;
		}

		if (data.name) {
			comment.name = data.name;
		}

		return comment;
	}

	/**
	 * @description Delete comment by id.
	 *
	 * @static
	 * @param {String} id Comment id.
	 * @returns {String} Message whether is comment deleted or not.
	 * @memberof CommentsService
	 */
	static deleteComment(id) {
		const comment = CommentsService.getComment(id);

		return commentsCollection.destroy(comment.id);
	}
};

module.exports = CommentsService;