let products = [
    { id: "1", "slug": "nike-shoes", "name": "Nike Shoes", "price": 360, "description": "Nike Shoes" },
    { id: "2", "slug": "adidas-shoes", "name": "Adidas Shoes", "price": 280, "description": "Adidas Shoes" },
    { id: "3", "slug": "puma-shoes", "name": "Puma Shoes", "price": 600, "description": "Puma Shoes" },
]

const all = () => {
    return products
}

const find = (id) => {
    return products.find(p => p.id === id)
}

const create = (product) => {
    const id = Number(products[products.length - 1].id) + 1 + ""
    products.push({ id, ...product })
    return products[products.length - 1]
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter(p => p.id != id)
    return products
}

module.exports = {
    all,
    find,
    create,
    update,
    remove
}