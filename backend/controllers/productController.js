const db = require("../config/db");

// Get All Products

exports.getProducts = (req, res) => {

   const sql = `
SELECT *
FROM products
ORDER BY
CASE
WHEN name='Decorative Pottery Set' THEN 1
WHEN name='Wooden Handicraft' THEN 2
WHEN name='Traditional Wall Art' THEN 3
WHEN name='Handwoven Bag' THEN 4
WHEN name='Handmade Jewelry' THEN 5
WHEN name='Traditional Saree' THEN 6
WHEN name='Custom Tailor Suit' THEN 7
WHEN name='Handmade Clay Pot' THEN 8
WHEN name='Eco-Friendly Bamboo Basket' THEN 9
WHEN name='Wooden Chair' THEN 10
WHEN name='Leather Sandals' THEN 11
WHEN name='Handmade Pot' THEN 12
ELSE 999
END
`;

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

};

// Add Product

exports.addProduct = (req, res) => {

  const { name, price, description } = req.body;

  const sql =
    "INSERT INTO products(name,price,description) VALUES(?,?,?)";

  db.query(
    sql,
    [name, price, description],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Product Added Successfully"
      });

    }
  );

};

// Get Single Product

exports.getProductById = (req, res) => {

  const id = req.params.id;

  const sql =
    "SELECT * FROM products WHERE id=?";

  db.query(
    sql,
    [id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result[0]);

    }
  );

};

// Delete Product

exports.deleteProduct = (req, res) => {

  const sql =
    "DELETE FROM products WHERE id=?";

  db.query(
    sql,
    [req.params.id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Product Deleted"
      });

    }
  );

};