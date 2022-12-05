
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const productRoutes = require('./routes/products');
app.set('views', __dirname + '/templates/views');
app.set('views engine', 'twig');


app.get('/', (req, res) => {
    res.render("home", {
        name: "World", 'users': [
            { name: 'John Rivea', email: 'josephdrivera0431@gmail.com' }
        ]
    });
});

app.use('/products', productRoutes);









app.listen(3000, () => {
    console.log('Listening on port 3000');
});