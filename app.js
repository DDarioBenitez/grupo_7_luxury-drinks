const express = require('express')
const path = require('path')
const app = express();
const port = 3050;

/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

/* MIDDLEWARE */
app.use(express.static('public'));



/* ENRUTADORES */
const otherRoutes = require("./routes/other.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
const productDetail = require("./routes/products.routes");
const dashboard = require("./routes/dashboard.routes");


/* RUTAS */
app.use("/", otherRoutes);
app.use("/", authRoutes);
app.use("/", cartRoutes);
app.use("/", productDetail);
app.use("/", dashboard);




/* SERVER */
app.listen(port, () => console.log(`http://localhost:${port}`))