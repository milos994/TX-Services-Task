const BaseCollection = require('./base');

const entries = [
	{
		id: '7b532873-9132-42fb-84ff-727afcf736d5',
		postId: '7d4c6ff6-e992-4950-ad15-6eeb7fbe7e14',
		name: "Blog Post Comment Name",
		text: "Comment text..."
	},
	{
		id: 'd1c1a6af-a967-40a7-89a4-5012cdf4e00f',
		postId: '7d4c6ff6-e992-4950-ad15-6eeb7fbe7e14',
		name: "Blog Post Comment Name 1",
		text: "Comment text 1..."
	},
	{
		id: 'e8087771-39f9-4d0c-a792-5a565bb478eb',
		postId: '2766c31b-f2e2-4322-9f2d-3e2096d3db26',
		name: "Blog Post Comment Name 2",
		text: "Comment text 2..."
	},
	{
		id: '87f10ce0-9e47-4bb5-84b8-67096c4ce9d9',
		postId: '51f47a31-1721-45a8-b814-c5bec0a11347',
		name: "Blog Post Comment Name 3",
		text: "Comment text 4..."
	},
	{
		id: '98d0e3b6-9f4e-428d-bb89-8361dd3235ef',
		postId: '976f9094-f9a0-4207-b909-f5c58892b7c8',
		name: "Blog Post Comment Name 4",
		text: "Comment text 4..."
	},
	{
		id: '36c31acc-09b6-4588-83e7-35365dc622dd',
		postId: '83dc1e46-a81a-47c0-a90c-6aa4d68f7903',
		name: "Blog Post Comment Name 5",
		text: "Comment text 5..."
	},
	{
		id: '7de34f9e-eed3-4fd1-914c-52adcb6753dc',
		postId: 'bf7e2b10-6114-435a-b6df-715cb63cbddf',
		name: "Blog Post Comment Name 6",
		text: "Comment text 6..."
	},
];

/**
 * @description Comments Collection Class.
 *
 * @class CommentsCollection
 * @extends {BaseCollection}
 */
class CommentsCollection extends BaseCollection {

}

module.exports = new CommentsCollection(entries);


