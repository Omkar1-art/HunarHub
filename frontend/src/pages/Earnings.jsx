import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Earnings() {
  return (
    <>
      <Navbar />

      <div className="container">

        <h2 className="title">
          Earnings Overview
        </h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>Total Earnings</h3>
            <h1>₹25000</h1>
          </div>

          <div className="dashboard-card">
            <h3>This Month</h3>
            <h1>₹7000</h1>
          </div>

          <div className="dashboard-card">
            <h3>Completed Jobs</h3>
            <h1>18</h1>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}