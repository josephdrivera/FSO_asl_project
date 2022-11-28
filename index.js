/* Activity: RESTful API

Activity Instructions
So now that I've shown you how to code out a fully functioning RESTful API implementation its time you followed my code demonstration on your own machine. You will need to implement all routes (except for the form method which will be covered at a later time). 

You will then demonstrate all of the RESTful endpoints using cURL in your terminal to hit all endpoints to your API. YOU MUST submit a video demonstration of all the RESTful endpoints working with your cURL commands. 

Your demonstration video will be graded based on the following attached assignment rubric. The routes that must be demonstrated for this assignment is as follows: 

Index - Show all products
Show - Show specific product
Update - Update a specific product's properties
Create - Create a new product with properties
Delete - Delete a product from your application
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const productRoutes = require('./routes/products');


app.use('/products', productRoutes);









app.listen(3000, () => {
    console.log('Listening on port 3000');
});