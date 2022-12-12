const { Image, Variant } = require("../models");

const index = async (req, res) => {
    const images = await Image.findAll();
    res.render("images/index", { images });
    //res.json(images);
};

const form = async (req, res) => {
    const variants = await Variant.findAll();
    if (req.params.id) {
        const image = await Image.findByPk(req.params.id);
        res.render("images/edit", { image, variants });
    } else {
        res.render("images/create", { variants });
    }
    //res.send("Image.form");
};

const show = async (req, res) => {
    const image = await Image.findByPk(req.params.id);
    const variant = await image.getVariant();
    res.render("images/show", { image, variant });
    //res.json(product);
};

const create = async (req, res) => {
    const image = await Image.create(req.body);
    res.redirect("/images/" + image.id);
    //res.json(product);
};

const update = async (req, res) => {
    const image = await Image.update(req.body, {
        where: { id: req.params.id },
    });
    res.redirect("/images/" + req.params.id);
    //res.json(image);
};

const remove = async (req, res) => {
    const images = await Image.destroy({ where: { id: req.params.id } });
    res.redirect("/images/");
    //res.json(images);
};

module.exports = { index, form, show, create, update, remove };