const { request, expect } = require('../index');

const commentsCollection = require('../../collections/comments')

const commentId = commentsCollection.entries[0].id;
const postId = commentsCollection.entries[0].postId;
const invalidUUID = 'AAA';
const randomUUID = '78673c12-e43a-4934-a647-e1ef3d3d7d36';

describe('Tests for comment routes', () => {
	describe('Get Comments', async () => {
		it('GET /posts/:postId/comments - Should throw an error if postId is not valid uuid', async () => {
			const { body: response } = await request
				.get(`/posts/${invalidUUID}/comments`)
				.expect(400);
			expect(response.message).to.equal('PostId must be a valid uuid.');
		});

		it('GET /posts/:postId/comments - Should throw an error if postId is random uuid', async () => {
			const { body: response } = await request
				.get(`/posts/${randomUUID}/comments`)
				.expect(404);
			expect(response.message).to.equal(`Post with id: ${randomUUID} not found.`);
		});

		it('GET /posts/:postId/comments - Should return list of post comments', async () => {
			const { body: response } = await request
				.get(`/posts/${postId}/comments`)
				.expect(200);
			expect(response).to.be.an('array');

			const properties = [
				'postId',
				'name',
				'text',
			];
			response.forEach(comment => {
				expect(properties.every(prop => comment.hasOwnProperty(prop))).to.be.true;
				expect(comment.postId).to.equal(postId);
			});
		});
	});

	describe('Create Comment tests', async () => {
		it('POST /posts/:postId/comments - Should throw an error if postId is not valid uuid', async () => {
			const { body: response } = await request
				.post(`/posts/${invalidUUID}/comments`)
				.send({
					name: 'Comment name',
					text: 'Comment text'
				})
				.expect(400);
			expect(response.message).to.equal('PostId must be a valid uuid.');
		});

		it('POST /posts/:postId/comments - Should throw an error if postId is random uuid', async () => {
			const { body: response } = await request
				.post(`/posts/${randomUUID}/comments`)
				.send({
					name: 'Comment name',
					text: 'Comment text'
				})
				.expect(404);
			expect(response.message).to.equal(`Post with id: ${randomUUID} not found.`);
		});

		it('POST /posts/:postId/comments - Should throw an error if text is not provided', async () => {
			const { body: response } = await request
				.post(`/posts/${postId}/comments`)
				.send({
					name: 'Comment name'
				})
				.expect(400);
			expect(response.message).to.equal('Text is required.');
		});

		it('POST /posts/:postId/comments - Should create comment', async () => {
			const body = {
				name: 'Comment name',
				text: 'Comment text'
			};

			const { body: response } = await request
				.post(`/posts/${postId}/comments`)
				.send(body)
				.expect(200);
			expect(response).to.be.an('object');
			expect(response.postId).to.equal(postId);
			expect(response.name).to.equal(body.name);
			expect(response.text).to.equal(body.text);
		});
	});

	describe('GET Comment tests', async () => {
		it('GET /comments/:commentId - Should throw an error if commentId is not valid uuid', async () => {
			const { body: response } = await request
				.get(`/comments/${invalidUUID}`)
				.expect(400);
			expect(response.message).to.equal('CommentId must be a valid uuid.');
		});

		it('GET /comments/:commentId - Should throw an error if commentId is random uuid', async () => {
			const { body: response } = await request
				.get(`/comments/${randomUUID}`)
				.expect(404);
			expect(response.message).to.equal(`Comment with id: ${randomUUID} not found.`);
		});

		it('GET /comments/:commentId - Should return a comment', async () => {
			const { body: response } = await request
				.get(`/comments/${commentId}`)
				.expect(200);
			expect(response).to.be.an('object');
			expect(response.id).to.equal(commentId);
			expect(response.postId).to.equal(postId);
		});
	});

	describe('Update Comment tests', async () => {
		it('PUT /comments/:commentId - Should throw an error if commentId is not valid uuid', async () => {
			const { body: response } = await request
				.put(`/comments/${invalidUUID}`)
				.send({
					name: 'Updated Comment name'
				})
				.expect(400);
			expect(response.message).to.equal('CommentId must be a valid uuid.');
		});

		it('PUT /comments/:commentId - Should throw an error if commentId is random uuid', async () => {
			const { body: response } = await request
				.put(`/comments/${randomUUID}`)
				.send({
					name: 'Updated Comment name'
				})
				.expect(404);
			expect(response.message).to.equal(`Comment with id: ${randomUUID} not found.`);
		});

		it('PUT /comments/:commentId - Should return updated comment', async () => {
			const name = 'Updated Comment name'
			const { body: response } = await request
				.put(`/comments/${commentId}`)
				.send({
					name
				})
				.expect(200);
			expect(response).to.be.an('object');
			expect(response.id).to.equal(commentId);
			expect(response.postId).to.equal(postId);
			expect(response.name).to.equal(name);
		});
	});

	describe('Delete Comment tests', async () => {
		it('DELETE /comments/:commentId - Should throw an error if commentId is not valid uuid', async () => {
			const { body: response } = await request
				.delete(`/comments/${invalidUUID}`)
				.expect(400);
			expect(response.message).to.equal('CommentId must be a valid uuid.');
		});

		it('DELETE /comments/:commentId - Should throw an error if commentId is random uuid', async () => {
			const { body: response } = await request
				.delete(`/comments/${randomUUID}`)
				.expect(404);
			expect(response.message).to.equal(`Comment with id: ${randomUUID} not found.`);
		});

		it('DELETE /comments/:commentId - Should return success message', async () => {
			const { body: response } = await request
				.delete(`/comments/${commentId}`)
				.expect(200);
			expect(response).to.be.an('object');
			expect(response.message).to.be.equal('Resource deleted');
		});
	});
});
