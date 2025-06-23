import React, { useState } from "react";

const LoginPage = ({ onSwitchToRegister, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>
        <b>🍊 Login to Orange Form</b>
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
