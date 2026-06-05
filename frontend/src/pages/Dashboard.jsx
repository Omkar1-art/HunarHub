import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container">

        <h2 className="title">
          Entrepreneur Dashboard
        </h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>Total Orders</h3>
            <h1>24</h1>
          </div>

          <div className="dashboard-card">
            <h3>Completed</h3>
            <h1>18</h1>
          </div>

          <div className="dashboard-card">
            <h3>Pending</h3>
            <h1>6</h1>
          </div>

          <div className="dashboard-card">
            <h3>Earnings</h3>
            <h1>₹25000</h1>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}