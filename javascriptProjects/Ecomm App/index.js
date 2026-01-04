const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
//const adminProductsRouter = require("./routes/admin/products");
//const productsRouter = require("./routes/products");
//const cartsRouter = require("./routes/carts");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["asdgfreeewag"],
  })
);

app.use(authRouter);

app.listen(3000, () => {
  console.log("Listening");
});
