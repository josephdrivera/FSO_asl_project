const { Product, Variant, Image } = require("../models");

const index = async (req, res, next) => {
    const products = await Product.findAll({
        include: [{ model: Variant, include: [Image] }],
    });
    res.render("storefront/index", { products });
};

const show = async (req, res, next) => {
    const product = await Product.findOne({
        where: { slug: req.params.slug },
        include: [{ model: Variant, include: [Image] }],
    });
    let variant = product.Variants[0];
    if (req.query.v) {
        variant = product.Variants.find((v) => v.slug === req.query.v);
    }
    res.render("storefront/show", { product, variant });
};

module.exports = { index, show };