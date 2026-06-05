const db = require("../config/db");

// Get All Services

exports.getServices = (req, res) => {

  const sql = `
SELECT *
FROM services
ORDER BY
CASE
WHEN service_name='Embroidery Service' THEN 1
WHEN service_name='Bamboo Craft' THEN 2
WHEN service_name='Wooden Furniture' THEN 3
WHEN service_name='Handloom Weaving' THEN 4
WHEN service_name='Metal Craft' THEN 5
WHEN service_name='Tailoring' THEN 6
WHEN service_name='Jewelry Repair' THEN 7
WHEN service_name='Artisan Service' THEN 8
WHEN service_name='Potter Service' THEN 9
WHEN service_name='Cobbler Service' THEN 10
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

// Add Service

exports.addService = (req, res) => {

  const { service_name, price, description } = req.body;

  const sql =
    "INSERT INTO services(service_name,price,description) VALUES(?,?,?)";

  db.query(
    sql,
    [service_name, price, description],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Service Added Successfully"
      });

    }
  );

};


// Delete Service

exports.deleteService = (req, res) => {

  const sql =
    "DELETE FROM services WHERE id=?";

  db.query(
    sql,
    [req.params.id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Service Deleted"
      });

    }
  );

};