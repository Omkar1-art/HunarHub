import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");

  const [showPassword,
  setShowPassword] =
  useState(false);

  const handleSignup = async () => {

    try {

      const response =
      await axios.post(
      " https://backend-sigma-five-50.vercel.app/api/signup",
      {
        name,
        email,
        password
      }
      );

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

    }

  };

  return (
    <>
      <Navbar />

      <div className="auth-page">

        <div className="auth-card">

          <div className="auth-left">

            <h1>
              Join HunarHub 🚀
            </h1>

            <p>
              Discover artisans,
              handmade products
              and local services.
            </p>

          </div>

          <div className="auth-right">

            <h2>Signup</h2>

            <input
              placeholder="Full Name"
              value={name}
              onChange={(e)=>
                setName(
                  e.target.value
                )
              }
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e)=>
                setEmail(
                  e.target.value
                )
              }
            />

            <input
              type={
                showPassword
                ? "text"
                : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e)=>
                setPassword(
                  e.target.value
                )
              }
            />

            <div className="show-pass">

              <input
                type="checkbox"
                onChange={() =>
                  setShowPassword(
                  !showPassword
                  )
                }
              />

              <span>
                Show Password
              </span>

            </div>

            <button
              className="auth-btn"
              onClick={handleSignup}
            >
              Signup
            </button>

            <p className="auth-link">

              Already have account?

              <Link to="/login">
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}