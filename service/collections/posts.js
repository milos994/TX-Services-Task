const BaseCollection = require('./base');

const entries = [
	{
		id: 1,
		title: "Blog Post Title 1",
	},
	{
		id: 2,
		title: "Blog Post Title 2",
	},
	{
		id: 3,
		title: "Blog Post Title 3",
	},
	{
		id: 4,
		title: "Blog Post Title 4",
	},
	{
		id: 5,
		title: "Blog Post Title 5",
	},
	{
		id: 6,
		title: "Blog Post Title 6",
	},
	{
		id: 7,
		title: "Blog Post Title 7",
	}
];

class PostsCollection extends BaseCollection {

}

module.exports = new PostsCollection(entries);


