const express = require('express');
const bodyParser = require('body-parser');
const BaseError = require('./errors/base');
const cors = require('cors')

const app = express();

const postsController = require('./controllers/posts');
const commentsController = require('./controllers/comments');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204
}));

app.use(postsController);
app.use(commentsController);

app.use((err, req, res, next) => {
	if (err instanceof BaseError) {
		res.status(err.status).json({ message: err.message });
	} else {
		res.status(500).json({ message: 'Internal Server Error' });
	}
	next();
});

app.listen(8000);

module.exports = app;