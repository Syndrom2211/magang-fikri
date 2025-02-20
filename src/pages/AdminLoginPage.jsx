import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/admin.css";
import { useState } from "react";
import axios from "axios";

function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    axios
      .post("http://localhost:1000/admin/login", { email, password })
      .then((res) => {
        console.log("Login Response:", res.data);
        if (res.data.status === "success") {
          localStorage.setItem("adminToken", res.data.token);
          sessionStorage.setItem("isFirstLogin", "true"); // Menandai login pertama
          navigate("/admin/dashboard");
        } else {
          setErrorMessage(res.data.message || "Login failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <img src={logo} alt="CreativeMusicHub" className="logo" />
        <p className="subtext">Please enter your details</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Your Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Your Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;