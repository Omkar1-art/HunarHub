const db = require("../config/db");

exports.getProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json(result);
  });
};

exports.addProduct = (req, res) => {
  const { name, price, description } = req.body;

  db.query(
    "INSERT INTO products(name,price,description) VALUES(?,?,?)",
    [name, price, description],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Product Added Successfully" });
    }
  );
};

exports.getProductById = (req, res) => {
  db.query(
    "SELECT * FROM products WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
};

exports.deleteProduct = (req, res) => {
  db.query(
    "DELETE FROM products WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product Deleted" });
    }
  );
};