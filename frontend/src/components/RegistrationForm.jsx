import React, { useState } from "react";

const RegistrationForm = ({ onSuccess, onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", { name, email, phone, password });
    setIsSubmitted(true);
  };

  // Password validation rules
  const isLengthValid = password.length >= 8;
  const hasCapital = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const hasNumberAndSpecial = hasNumber && hasSpecialChar;

  return isSubmitted ? (
    <div className="login-form">
      <h2>Registration Successful</h2>
      <p style={{ textAlign: "center", margin: "20px 0" }}>Please login here</p>
      <button onClick={onSuccess} style={{ width: "100%" }}>
        Go to Login
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Register</h2>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Enter your name"
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
      />

      <label>Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        placeholder="+91XXXXXXXXXX"
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Create a password"
      />

      {/* Password rule feedback */}
      <ul style={{ fontSize: "12px", marginTop: "5px", paddingLeft: "20px" }}>
        <li style={{ color: isLengthValid ? "green" : "red" }}>
          Minimum 8 characters
        </li>
        <li style={{ color: hasCapital ? "green" : "red" }}>
          At least 1 capital letter
        </li>
        <li style={{ color: hasNumberAndSpecial ? "green" : "red" }}>
          At least 1 number and 1 special character
        </li>
      </ul>

      <button type="submit">Register</button>

      <p
        style={{
          marginTop: "15px",
          textAlign: "center",
          cursor: "pointer",
          color: "#1976d2",
        }}
        onClick={onSwitchToLogin}
      >
        Already have an account? Login here
      </p>
    </form>
  );
};

export default RegistrationForm;
