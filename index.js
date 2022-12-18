const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const productRouter = require("./routes/Products");
const variantsRouter = require("./routes/Variants");
const imagesRouter = require("./routes/Images");
const storefrontRouter = require("./routes/Storefront");
const { index } = require("./controllers/Storefront");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(fileUpload());

app.set("views", __dirname + "/templates/views");
app.set("view engine", "twig");

app.get("/", index);


app.use("/public", express.static("public"));

app.use("/store", storefrontRouter);
app.use("/products", productRouter);
app.use("/variants", variantsRouter);
app.use("/images", imagesRouter);

app.listen(3000);