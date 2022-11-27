const express = require('express');
const app = express();


//GET / HTTP/1.1

app.get('/', (req, res) => {
    res.send('Home Page! GET route..');
});

//POST / HTTP/1.1
app.post('/', (req, res) => {
    res.send('Home Page! POST route...');
});

// GET /products/683-nike-large-white-shoe HTTP/1.1

app.get('/products/:productName', (req, res) => {
    res.send('Product Product Name:' + req.params.productName);
});

app.get('/products/productId-:productName', (req, res) => {
    res.send('Product Product Name:' + req.params.productName + ' Product Id:' + req.params.productId);
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});