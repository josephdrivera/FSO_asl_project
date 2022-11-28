const products = require('../models/products');


const index = (req, res) => {
    const allProducts = products.all();
    res.json(allProducts);

};

const show = (req, res) => {
    const product = products.find(req.params.id);
    res.json(product);
};

const form = (req, res) => {
    res.send('Products Form');
};

const create = (req, res) => {
    const product = products.create(req.body);
    res.json(product);

};

const update = (req, res) => {
    const product = products.update(req.params.id, req.body);
    res.json(product);
};

const deleteProduct = (req, res) => {
    const product = products.remove(req.params.id);
    res.json(product);
};





module.exports = { index, show, form, create, update, delete: deleteProduct };