// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
var BooksController = require('./controllers/BooksController');
var AuthorController = require('./controllers/AuthorController');
// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints -- VIEW -- CRUD
app.post('/books', BooksController.create);
app.get('/books', BooksController.read);
app.get('/books/:id', BooksController.show);
app.put('/books/:id', BooksController.update);
app.delete('/books/:id', BooksController.destroy);

//author
app.post('/authors', AuthorController.create);
app.get('/authors', AuthorController.read);
app.get('/authors/:id', AuthorController.show);
app.put('/authors/:id', AuthorController.update);
app.delete('/authors/:id', AuthorController.destroy);

// Connections
var port = 3000;
var mongoURI = 'mongodb://localhost:27017/biblioteca';

mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoURI);
});

app.listen(port, function() {
  console.log('listening on port ', port);
});
