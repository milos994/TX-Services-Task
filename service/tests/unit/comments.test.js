
const { expect } = require('../index');

const CommentsService = require('../../services/comments');
const commentsCollection = require('../../collections/comments')

const commentId = commentsCollection.entries[1].id;
const postId = commentsCollection.entries[1].postId;
const randomUUID = '78673c12-e43a-4934-a647-e1ef3d3d7d36';

describe('Comments Service Unit Tests', () => {
	it('Given valid params, getAllPostComments function should return an array of comments', () => {
		const comments = CommentsService.getAllPostComments(postId);

		const properties = [
			'postId',
			'name',
			'text',
		];
		expect(comments).to.be.an('array');
		comments.forEach(comment => {
			expect(properties.every(prop => comment.hasOwnProperty(prop))).to.be.true;
			expect(comment.postId).to.equal(postId);
		});
	});

	it('Given random commentId, getComment function should throw an error', () => {
		expect(
			() => CommentsService.getComment(randomUUID)
		).to.throw(`Comment with id: ${randomUUID} not found.`);
	});

	it('Given valid data, getComment function should get a comment', () => {
		const comment = CommentsService.getComment(commentId);

		expect(comment).to.be.an('object');
		expect(comment.id).to.equal(commentId);
	});

	it('Given valid data, createPostComment function should create a comment', () => {
		const data = {
			postId,
			text: 'Text',
			name: 'name'
		}
		const comment = CommentsService.createPostComment(data);

		expect(comment).to.be.an('object');
		expect(comment.postId).to.equal(data.postId);
		expect(comment.text).to.equal(data.text);
		expect(comment.name).to.equal(data.name);
	});

	it('Given random commentId, updatePostComment function should throw an error', () => {
		expect(
			() => CommentsService.updatePostComment(randomUUID, { title: 'title' })
		).to.throw(`Comment with id: ${randomUUID} not found.`);
	});

	it('Given valid data, updatePostComment function should update a comment', () => {
		const data = {
			name: 'Updated Name',
			text: 'Updated Text'
		}
		const comment = CommentsService.updatePostComment(commentId, data);

		expect(comment).to.be.an('object');
		expect(comment.id).to.equal(commentId);
		expect(comment.name).to.equal(data.name);
		expect(comment.text).to.equal(data.text);
	});
});
