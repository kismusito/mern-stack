const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

// Body parsers
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Other config
app.use(cors());
app.use(helmet());

// Routes
app.use(require('./routes/auth.todo'));
app.use('/todo' , require('./routes/todo.route'));

module.exports = app;