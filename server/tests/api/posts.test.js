const { request, expect } = require('../index');

const postsCollection = require('../../collections/posts')

const postId = postsCollection.entries[0].id;
const invalidUUID = 'AAA';
const randomUUID = '78673c12-e43a-4934-a647-e1ef3d3d7d36';

describe('Tests for posts routes', () => {
	describe('Get Posts', async () => {
		it('GET /posts - Should return list of posts', async () => {
			const { body: response } = await request
				.get(`/posts`)
				.expect(200);
			expect(response).to.be.an('array');

			const properties = [
				'id',
				'title',
				'text',
			];
			response.forEach(post => {
				expect(properties.every(prop => post.hasOwnProperty(prop))).to.be.true;
			});
		});
	});

	describe('GET Post tests', async () => {
		it('GET /posts/:postId - Should throw an error if postId is not valid uuid', async () => {
			const { body: response } = await request
				.get(`/posts/${invalidUUID}`)
				.expect(400);
			expect(response.message).to.equal('PostId must be a valid uuid.');
		});

		it('GET /posts/:postId - Should throw an error if postId is random uuid', async () => {
			const { body: response } = await request
				.get(`/posts/${randomUUID}`)
				.expect(404);
			expect(response.message).to.equal(`Post with id: ${randomUUID} not found.`);
		});

		it('GET /posts/:postId - Should return a post', async () => {
			const { body: response } = await request
				.get(`/posts/${postId}`)
				.expect(200);
			expect(response).to.be.an('object');
			expect(response.id).to.equal(postId);
		});
	});

	describe('Create Post tests', async () => {
		it('POST /posts - Should throw an error if title is not provided', async () => {
			const { body: response } = await request
				.post(`/posts`)
				.send({
					text: 'Post text'
				})
				.expect(400);
			expect(response.message).to.equal('Title is required.');
		});

		it('POST /posts - Should create comment', async () => {
			const body = {
				title: 'Post name',
				text: 'Post text'
			};

			const { body: response } = await request
				.post(`/posts`)
				.send(body)
				.expect(200);
			expect(response).to.be.an('object');
			expect(response.title).to.equal(body.title);
			expect(response.text).to.equal(body.text);
		});
	});

	describe('Update Post tests', async () => {
		it('PUT /posts/:postId - Should throw an error if postId is not valid uuid', async () => {
			const { body: response } = await request
				.put(`/posts/${invalidUUID}`)
				.send({
					title: 'Updated Post title'
				})
				.expect(400);
			expect(response.message).to.equal('PostId must be a valid uuid.');
		});

		it('PUT /posts/:postId - Should throw an error if postId is random uuid', async () => {
			const { body: response } = await request
				.put(`/posts/${randomUUID}`)
				.send({
					title: 'Updated Post title'
				})
				.expect(404);
			expect(response.message).to.equal(`Post with id: ${randomUUID} not found.`);
		});

		it('PUT /posts/:postId - Should return updated post', async () => {
			const title = 'Updated Post Title'
			const { body: response } = await request
				.put(`/posts/${postId}`)
				.send({
					title
				})
				.expect(200);
			expect(response).to.be.an('object');
			expect(response.id).to.equal(postId);
			expect(response.title).to.equal(title);
		});
	});

	describe('Delete Post tests', async () => {
		it('DELETE /posts/:postId - Should throw an error if postId is not valid uuid', async () => {
			const { body: response } = await request
				.delete(`/posts/${invalidUUID}`)
				.expect(400);
			expect(response.message).to.equal('PostId must be a valid uuid.');
		});

		it('DELETE /posts/:postId - Should throw an error if postId is random uuid', async () => {
			const { body: response } = await request
				.delete(`/posts/${randomUUID}`)
				.expect(404);
			expect(response.message).to.equal(`Post with id: ${randomUUID} not found.`);
		});

		it('DELETE /posts/:postId - Should return success message', async () => {
			const { body: response } = await request
				.delete(`/posts/${postId}`)
				.expect(200);
			expect(response).to.be.an('object');
			expect(response.message).to.be.equal('Resource deleted');
		});
	});
});
