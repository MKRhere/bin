const express = require('express');
const helmet = require('helmet');
const mongoose = require('./middleware/mongoose');
const render = require('./middleware/render');

const app = express();

const home = require('./routes/home');
const getSnippet = require('./routes/getSnippet');
const createSnippet = require('./routes/createSnippet');
const fork = require('./routes/fork');

app.use(helmet());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(mongoose());
app.use(render());

app.use('/fork', fork);
app.post('/', createSnippet);

app.get('/~:id', getSnippet);
app.get('/', home);


const PORT = process.env.BIN_PORT || 1998;
app.listen(PORT, () => console.log('Listening on port', PORT));
