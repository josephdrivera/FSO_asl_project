let products = [];


const all = (req, res) => {
    return products;
}

const find = (id) => {
    return products.find(product => product.id == id);
}

const update = (id, product) => {
    product = products.map((p) => {
        return p.id == id ? product : p;
    });
    return product;
}

const remove = (id) => {
    products = products.filter(p => p.id != id);

    return products;
}

module.exports = { all, find, update, remove };

