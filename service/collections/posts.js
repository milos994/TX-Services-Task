const BaseCollection = require('./base');

const entries = [
	{
		id: '7d4c6ff6-e992-4950-ad15-6eeb7fbe7e14',
		title: "Blog Post Title 1",
		text: "Blog Post Text 1",
	},
	{
		id: '2766c31b-f2e2-4322-9f2d-3e2096d3db26',
		title: "Blog Post Title 2",
		text: "Blog Post Text 2",
	},
	{
		id: '51f47a31-1721-45a8-b814-c5bec0a11347',
		title: "Blog Post Title 3",
		text: "Blog Post Text 3",
	},
	{
		id: '976f9094-f9a0-4207-b909-f5c58892b7c8',
		title: "Blog Post Title 4",
		text: "Blog Post Text 4",
	},
	{
		id: '5e733000-f869-4cee-a28a-aaff91602780',
		title: "Blog Post Title 5",
		text: "Blog Post Text 5",
	},
	{
		id: '83dc1e46-a81a-47c0-a90c-6aa4d68f7903',
		title: "Blog Post Title 6",
		text: "Blog Post Text 6",
	},
	{
		id: 'bf7e2b10-6114-435a-b6df-715cb63cbddf',
		title: "Blog Post Title 7",
		text: "Blog Post Text 7",
	}
];

/**
 * @description Posts Collection Class.
 *
 * @class PostsCollection
 * @extends {BaseCollection}
 */
class PostsCollection extends BaseCollection {

}

module.exports = new PostsCollection(entries);


