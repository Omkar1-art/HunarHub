import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";

import Entrepreneurs from "./pages/Entrepreneurs";
import EntrepreneurProfile from "./pages/EntrepreneurProfile";

import UserProfile from "./pages/UserProfile";
import OrderHistory from "./pages/OrderHistory";

import Dashboard from "./pages/Dashboard";
import Earnings from "./pages/Earnings";

import AdminDashboard from "./pages/AdminDashboard";
import Complaints from "./pages/Complaints";
import Reports from "./pages/Reports";

import ProductDetails from "./pages/ProductDetails";
import ServiceBooking from "./pages/ServiceBooking";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/services" element={<Services />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/contact" element={<Contact />} />

      <Route
        path="/entrepreneurs"
        element={<Entrepreneurs />}
      />

      <Route
             path="/entrepreneur-profile/:id"
            element={<EntrepreneurProfile />}
      />

      <Route
          path="/user-profile"
          element={
          <ProtectedRoute>
          <UserProfile />
          </ProtectedRoute>
          }
        />

      <Route
          path="/orders"
          element={
          <ProtectedRoute>
            <OrderHistory />
            </ProtectedRoute>
              }
        />

      <Route
          path="/dashboard"
          element={
          <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
            }
        />

      <Route
        path="/earnings"
        element={<Earnings />}
      />

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

      <Route
        path="/complaints"
        element={<Complaints />}
      />

      <Route
        path="/reports"
        element={<Reports />}
      />

      <Route
        path="/product-details/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/service-booking"
        element={<ServiceBooking />}
      />

    </Routes>
  );
}