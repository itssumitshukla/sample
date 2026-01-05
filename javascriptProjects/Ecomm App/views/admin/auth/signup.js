const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ req, errors }) => {
  console.log(errors);
  return layout({
    content: `
    <div>
    Your Id is: ${req.session.userId}
        <form method="POST">
            <input name="email" placeholder="email" />
            ${getError(errors, "email")}
            <input name="password" placeholder="password" />
            ${getError(errors, "password")}</p>
            <input name="passwordConfirmation" placeholder="password confirmation" />
            ${getError(errors, "passwordConfirmation")}
            <button>SignUP</button>
        </form>
    </div>
    `,
  });
};
