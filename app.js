const express = require('express')
const path = require('path')
const app = express();
const port = 3050;
const methodOverride = require("method-override")
const cookieParse = require("cookie-parse")
const{ createSessionFromCookies, insertDataLocals } = require('./middleware')

/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));


/* MIDDLEWARE */
app.use(express.static('public'));
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }));
app.use(insertDataLocal);
app.use(cookieParse());
app.use(express.json());
app.use(session({secret : "Si se pudo"}))

app.use(createSessionFromCookies)
app.use(insertDataLocals)



/* ENRUTADORES */
const otherRoutes = require("./routes/other.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");
const productDetail = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");


/* RUTAS */
app.use("/", otherRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
app.use("/product", productDetail);
app.use("/admin", adminRoutes);



/* SERVER */
app.listen(port, () => console.log(`http://localhost:${port}`))