const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const usersRepo = require("./repositories/users");
const { use } = require("react");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["asfsadgfdfgdf"],
  })
);

app.listen(3000, () => {
  console.log("Listening");
});
