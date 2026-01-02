module.exports = ({ req }) => {
  return `
    <!DOCTYPE html>
  <html>
  <head></head>
  <body>
    <div>
    Your Id is: ${req.session.userId}
        <form method="POST">
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />
            <input name="passwordConfirmation" placeholder="password confirmation" />
            <button>SignUP</button>
        </form>
    </div>
        </body>
    </html>
    `;
};
