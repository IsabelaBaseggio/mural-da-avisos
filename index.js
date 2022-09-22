const PORT = 3000
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api')

const app = express();

// Body Parser
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});

