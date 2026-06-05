import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Reports() {
  return (
    <>
      <Navbar />

      <div className="container">

        <h2 className="title">
          Reports
        </h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>Sales Report</h3>
          </div>

          <div className="dashboard-card">
            <h3>User Report</h3>
          </div>

          <div className="dashboard-card">
            <h3>Earnings Report</h3>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}