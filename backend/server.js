const orderRoutes = require("./routes/orderRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", serviceRoutes);
app.use("/api", orderRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});