const PORT = 3000
const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./model/posts')

const app = express();

app.get('/all', bodyParser.json(), (req, res) => {

    res.json(JSON.stringify(posts.getAll()));

});

app.post('new', (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description); 

    res.send('Post adicionado');

});



app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
