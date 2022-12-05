//use express
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
//use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/products')
//use twig
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render('home', {
        name: 'World!', 'users': [
            { name: 'Joseph Rivera', email: 'josephdrivera0431@gmail.com' },
            { name: 'Ana Rivera', email: 'anarivera@gmail.com' },
            { name: 'kiki Rivera', email: 'kikirivera01@gmail.com' }
        ]
    })
})


app.use('/products', productRouter)


app.listen(3000)