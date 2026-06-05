import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

export default function AdminDashboard() {

  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: ""
  });

  const [serviceData, setServiceData] = useState({
    service_name: "",
    price: "",
    description: ""
  });

  useEffect(() => {
    fetchProducts();
    fetchServices();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://heartfelt-communication-production-d7be.up.railway.app/api/products")
      .then((res) => setProducts(res.data));
  };

  const fetchServices = () => {
    axios
      .get("https://heartfelt-communication-production-d7be.up.railway.app/api/services")
      .then((res) => setServices(res.data));
  };

  const addProduct = async () => {

    await axios.post(
      "https://heartfelt-communication-production-d7be.up.railway.app/api/products",
      productData
    );

    alert("Product Added");

    setProductData({
      name: "",
      price: "",
      description: ""
    });

    fetchProducts();
  };

  const deleteProduct = async (id) => {

    await axios.delete(
      `https://heartfelt-communication-production-d7be.up.railway.app/api/products/${id}`
    );

    alert("Product Deleted");

    fetchProducts();
  };

  const addService = async () => {

    await axios.post(
      "https://heartfelt-communication-production-d7be.up.railway.app/api/services",
      serviceData
    );

    alert("Service Added");

    setServiceData({
      service_name: "",
      price: "",
      description: ""
    });

    fetchServices();
  };

  const deleteService = async (id) => {

    await axios.delete(
      `https://heartfelt-communication-production-d7be.up.railway.app/api/services/${id}`
    );

    alert("Service Deleted");

    fetchServices();
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <h2 className="title">
          Admin Dashboard
        </h2>

        <h3>Add Product</h3>

        <input
          placeholder="Product Name"
          value={productData.name}
          onChange={(e) =>
            setProductData({
              ...productData,
              name: e.target.value
            })
          }
        />

        <input
          placeholder="Price"
          value={productData.price}
          onChange={(e) =>
            setProductData({
              ...productData,
              price: e.target.value
            })
          }
        />

        <input
          placeholder="Description"
          value={productData.description}
          onChange={(e) =>
            setProductData({
              ...productData,
              description: e.target.value
            })
          }
        />

        <button onClick={addProduct}>
          Add Product
        </button>

        <hr />

        <h3>Products</h3>

        {products.map((item) => (

          <div
            key={item.id}
            className="order-card"
          >
            {item.name}

            <button
              onClick={() =>
                deleteProduct(item.id)
              }
            >
              Delete
            </button>

          </div>

        ))}

        <hr />

        <h3>Add Service</h3>

        <input
          placeholder="Service Name"
          value={serviceData.service_name}
          onChange={(e) =>
            setServiceData({
              ...serviceData,
              service_name: e.target.value
            })
          }
        />

        <input
          placeholder="Price"
          value={serviceData.price}
          onChange={(e) =>
            setServiceData({
              ...serviceData,
              price: e.target.value
            })
          }
        />

        <input
          placeholder="Description"
          value={serviceData.description}
          onChange={(e) =>
            setServiceData({
              ...serviceData,
              description: e.target.value
            })
          }
        />

        <button onClick={addService}>
          Add Service
        </button>

        <hr />

        <h3>Services</h3>

        {services.map((item) => (

          <div
            key={item.id}
            className="order-card"
          >

            {item.service_name}

            <button
              onClick={() =>
                deleteService(item.id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

      <Footer />
    </>
  );
}