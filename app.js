const express = require('express')
const path = require('path')
const app = express();
const port = 3050;
const methodOverride = require("method-override");
const session = require("express-session")
const createSessionFromCookies = require("./src/middlewares/createSessionFromCookies")
const insertDataLocal = require('./src/middlewares/insertDataLocal');
const cookieParse = require("cookie-parser")
const session = require("express-session")


/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../grupo_7_luxury-drinks/src/views"));


/* MIDDLEWARE */
app.use(express.static('public'));
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }));
app.use(session({secret: "msj"}));
app.use(cookieParse())
app.use(session({secret:"PALABRA SECRETA"}))
app.use(createSessionFromCookies)
app.use(insertDataLocal);



/* ENRUTADORES */
const otherRoutes = require("./src/routes/other.routes");
const authRoutes = require("./src/routes/auth.routes");
const cartRoutes = require("./src/routes/cart.routes");
const productDetail = require("./src/routes/products.routes");
const adminRoutes = require("./src/routes/admin.routes");



/* RUTAS */
app.use("/", otherRoutes);
app.use("/", authRoutes);
app.use("/", cartRoutes);
app.use("/", productDetail);
app.use("/admin", adminRoutes);



/* SERVER */
app.listen(port, () => console.log(`http://localhost:${port}`))