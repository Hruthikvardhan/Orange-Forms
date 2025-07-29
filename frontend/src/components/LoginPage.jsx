import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import orangeIcon from "../assets/orange_icon.png"; // Make sure this path is correct

const LoginPage = ({ onSwitchToRegister, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text || "Login failed");
          });
        }
        return res.json();
      })
      .then((data) => {
        // Save username and token to localStorage
        if (data.username) {
          localStorage.setItem("username", data.username);
        }
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        // Notify header and all tabs instantly
        window.dispatchEvent(new Event("storage"));
        // Redirect to home page
        navigate("/");
      })
      .catch((err) => {
        alert(
          err.message || "Login failed! Check your credentials and try again."
        );
      });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {/* Icon above the heading */}
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <img
          src={orangeIcon}
          alt="Orange Icon"
          style={{ width: "40px", height: "40px" }}
        />
      </div>

      <h2 style={{ textAlign: "center", fontWeight: 600 }}>
        Login to Orange Form
      </h2>

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter your password"
      />

      {/* Forgot Password Link */}
      <div style={{ textAlign: "right", marginBottom: "15px" }}>
        <button
          type="button"
          onClick={onForgotPassword}
          style={{
            background: "none",
            border: "none",
            color: "#1976d2",
            cursor: "pointer",
            padding: 0,
            fontSize: "14px",
            textDecoration: "underline",
          }}
        >
          Forgot Password?
        </button>
      </div>

      <button type="submit">Login</button>

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "#1976d2", cursor: "pointer" }}
          onClick={onSwitchToRegister}
        >
          Register now
        </span>
      </p>
    </form>
  );
};

export default LoginPage;
