const express = require('express');
const app = express();


/* Lesson: Advanced Routing Using Express

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
    */

/* Activity: Advanced Routing Using Express
Assignment Directions
Your assignment will need to correctly respond to 3 different incoming routes. Note that some of the dynamic request values you will need are located in various places throughout your req argument. For example to access header values from the request you will need to find it by accessing req.headers. To access query parameters attached to the url you will find them in req.query. All of the above requests should be executed using the cURL command line client. If you are not sure how to use the cURL CLI please go back into the module 1 lessons and watch the videos. We go over how to use cURL to execute HTTP requests. Or you can use telnet if you would like to write them by hand. Remember that you can add headers to any cURL request by specifying the "-H" flag for each additional header you want to send with the request. Below is an example of a cURL request that sets the HTTP method to GET with some extra header data. */

/*
Incoming HTTP Request
GET /products/all HTTP/1.1
Page: 2
Sort: price
Order: desc
Expected Response (with dynamic values)
GET Products: 2, price, desc
*/

app.get('/products/all', (req, res) => {
    const page = "2";
    const sort = "price";
    const order = "desc";
    res.send(`GET Products: ${page}, ${sort}, ${order}`);
});

/*
Incoming HTTP Request
GET /products/8719 HTTP/1.1
GET Products: 8719 
*/

app.get('/products/:productID', (req, res) => {
    res.send('Product Product ID:' + req.params.productID);
});


/*
Incoming HTTP Request
GET /products/8719-small-red HTTP/1.1
Expected Response (with dynamic values)
GET Products: 8719, small, red
*/

app.get('/products/:productID-:size-:color', (req, res) => {
    res.send(`GET Products: ${req.params.productID}, ${req.params.size}, ${req.params.color}`);
});






app.listen(3000, () => {
    console.log('Listening on port 3000');
});