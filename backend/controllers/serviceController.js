const db = require("../config/db");

exports.getServices = (req, res) => {
  const sql = "SELECT * FROM services";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json(result);
  });
};

exports.addService = (req, res) => {
  const { service_name, price, description } = req.body;

  db.query(
    "INSERT INTO services(service_name,price,description) VALUES(?,?,?)",
    [service_name, price, description],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Service Added Successfully" });
    }
  );
};

exports.deleteService = (req, res) => {
  db.query(
    "DELETE FROM services WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Service Deleted" });
    }
  );
};