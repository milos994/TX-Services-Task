
const { expect } = require('../index');

const PostsService = require('../../services/posts');
const postsCollection = require('../../collections/posts')

const postId = postsCollection.entries[1].id;
const randomUUID = '78673c12-e43a-4934-a647-e1ef3d3d7d36';

describe('Posts Service Unit Tests', () => {
	it('Given valid params, getAllPosts function should return an array of posts', () => {
		const posts = PostsService.getAllPosts(postId);

		const properties = [
			'id',
			'title',
			'text',
		];
		expect(posts).to.be.an('array');
		posts.forEach(post => {
			expect(properties.every(prop => post.hasOwnProperty(prop))).to.be.true;
		});
	});

	it('Given random postId, getPost function should throw an error', () => {
		expect(
			() => PostsService.getPost(randomUUID)
		).to.throw(`Post with id: ${randomUUID} not found.`);
	});

	it('Given valid data, getPost function should get a post', () => {
		const post = PostsService.getPost(postId);

		expect(post).to.be.an('object');
		expect(post.id).to.equal(postId);
	});

	it('Given valid data, createPost function should create a post', () => {
		const data = {
			title: 'Title',
			text: 'Text'
		}
		const post = PostsService.createPost(data);

		expect(post).to.be.an('object');
		expect(post.title).to.equal(data.title);
		expect(post.text).to.equal(data.text);
	});

	it('Given random postId, updatePost function should throw an error', () => {
		expect(
			() => PostsService.updatePost(randomUUID, { title: 'title' })
		).to.throw(`Post with id: ${randomUUID} not found.`);
	});

	it('Given valid data, updatePost function should update post', () => {
		const data = {
			title: 'Updated Title',
			text: 'Updated Text'
		}
		const post = PostsService.updatePost(postId, data);

		expect(post).to.be.an('object');
		expect(post.title).to.equal(data.title);
		expect(post.text).to.equal(data.text);
	});

	it('Given random postId, deletePost function should throw an error', () => {
		expect(
			() => PostsService.deletePost(randomUUID)
		).to.throw(`Post with id: ${randomUUID} not found.`);
	});

	it('Given valid data, deletePost function should delete post', () => {
		const post = PostsService.deletePost(postId);
		expect(post).to.equal(true);
	});
});
