const { Variant, Product } = require("../models");

const index = async (req, res) => {
    const variants = await Variant.findAll();
    res.render("variants/index", { variants });
    //res.json(variants);
};

const form = async (req, res) => {
    const products = await Product.findAll();
    if (req.params.id) {
        const variant = await Variant.findByPk(req.params.id);
        res.render("variants/edit", { variant, products });
    } else {
        res.render("variants/create", { products });
    }
    //res.send("Variant.form");
};

const show = async (req, res) => {
    const variant = await Variant.findByPk(req.params.id);
    const product = await variant.getProduct();
    res.render("variants/show", { variant, product });
    //res.json(variant);
};

const create = async (req, res) => {
    const variant = await Variant.create(req.body);
    res.redirect("/variants/" + variant.id);
    //res.json(variant);
};

const update = async (req, res) => {
    const variant = await Variant.update(req.body, {
        where: { id: req.params.id },
    });
    res.redirect("/variants/" + req.params.id);
    //res.json(variant);
};

const remove = async (req, res) => {
    const variants = await Variant.destroy({ where: { id: req.params.id } });
    res.redirect("/variants/");
    //res.json(variants);
};

module.exports = { index, form, show, create, update, remove };