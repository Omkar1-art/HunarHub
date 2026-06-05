import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Complaints() {
  return (
    <>
      <Navbar />

      <div className="container">

        <h2 className="title">
          Complaints Management
        </h2>

        <div className="order-card">
          Late Delivery
          <button>Resolve</button>
        </div>

        <div className="order-card">
          Poor Product Quality
          <button>Resolve</button>
        </div>

      </div>

      <Footer />
    </>
  );
}