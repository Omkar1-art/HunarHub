const db = require("../config/db");

// Get Orders

exports.getOrders = (req, res) => {

  const sql = "SELECT * FROM orders";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};

// Add Order

exports.addOrder = (req, res) => {

  const { user_id, product_id, status } = req.body;

  const sql =
    "INSERT INTO orders(user_id, product_id, status) VALUES(?,?,?)";

  db.query(
    sql,
    [user_id, product_id, status],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Order Added Successfully"
      });

    }
  );

};