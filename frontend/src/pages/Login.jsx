import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        " https://backend-sigma-five-50.vercel.app/api/login",
        {
          email,
          password
        }
      );

      if(response.data.token){

        localStorage.setItem(
          "token",
          response.data.token
        );

        alert("Login Success");

        window.location.href = "/";

      }else{

        alert(response.data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (
    <>
      <Navbar />

      <div className="auth-page">

        <div className="auth-card">

          <div className="auth-left">

            <h1>Welcome Back 👋</h1>

            <p>
              Login to access your orders,
              services and handmade products.
            </p>

          </div>

          <div className="auth-right">

            <h2>Login</h2>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
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
              onChange={(e) =>
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
              onClick={handleLogin}
            >
              Login
            </button>

            <p className="auth-link">

              Don't have account?

              <Link to="/signup">
                Signup
              </Link>

            </p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}