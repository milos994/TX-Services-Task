const express = require('express');
const bodyParser = require('body-parser');
const postsController = require('./controllers/posts');
const BaseError = require('./errors/base');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(postsController);

app.use((err, req, res, next) => {
	console.log(err)
	if (err instanceof BaseError) {
		res.status(err.status).json({ message: err.message });
	} else {
		res.status(500).json({ message: 'Internal Server Error' });
	}
	next();
});

app.listen(3000);