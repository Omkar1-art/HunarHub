const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {

  const { name, email, password } = req.body;

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users(name,email,password) VALUES(?,?,?)";

  db.query(
    sql,
    [name, email, hashedPassword],
    (err, result) => {

      console.log("EMAIL:", email);
      console.log("RESULT:", result);

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "User Registered Successfully"
      });

    }
  );

};

exports.login = (req, res) => {

  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email=?";

  db.query(
    sql,
    [email],
    async (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      if (result.length === 0) {

        return res.json({
          message: "User Not Found"
        });

      }

      const user = result[0];

      const validPassword =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!validPassword) {

        return res.json({
          message: "Invalid Password"
        });

      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        "hunarhub_secret_key",
        {
          expiresIn: "1d"
        }
      );

      res.json({
        message: "Login Success",
        token
      });

    }
  );

};