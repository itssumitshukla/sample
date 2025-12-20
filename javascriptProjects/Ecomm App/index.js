const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div>
        <form>
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="password confirmation" />
            <button>SignUP</button>
        </form>
    </div>
    `);
});

app.listen(3000, () => {
  console.log("Listening");
});
