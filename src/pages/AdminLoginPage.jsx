import { FaEnvelope, FaLock } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../style/admin.css";

const AdminLoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <img src={logo} alt="CreativeMusicHub" className="logo" />
        <p className="subtext">Please enter your details</p>
        
        {/* Email Input */}
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Your Email" className="input-field" />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Your Password" className="input-field" />
        </div>

        {/* Login Button */}
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default AdminLoginPage;