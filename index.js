const express = require('express');
const app = express();


//GET / HTTP/1.1

app.get('/', (req, res) => {
    res.send('Home Page!');
});

//GET /about HTTP/1.1
app.get('/', (req, res) => {
    res.send('Home Page! second route...');
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});