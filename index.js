const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products");
const variantsRouter = require("./routes/Variants");
const imagesRouter = require("./routes/Images");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", __dirname + "/templates/views");
app.set("view engine", "twig");

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/products", productRouter);
app.use("/variants", variantsRouter);
app.use("/images", imagesRouter);

app.listen(3000);