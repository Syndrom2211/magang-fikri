import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/admin.css";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function AdminLoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:1000/admin/login", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        console.log("Login successful, navigating to /admin");
        onLogin();
        navigate("/admin");
        console.log("Navigated to /admin");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid credentials");
      } else {
        console.error("Error during login:", error);
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <img src={logo} alt="CreativeMusicHub" className="logo" />
        <p className="subtext">Masukan Username dan Password</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="text"
              placeholder="Username Anda"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Kata Kunci Anda"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="submit" className="login-button">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

AdminLoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired, // Tambahkan validasi prop di sini
};

export default AdminLoginPage;
