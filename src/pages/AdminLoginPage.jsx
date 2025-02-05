import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">YUKMARI Project</h2>
        <p className="text-white text-center mb-6">Please enter your details</p>

        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            placeholder="Your Account"
            className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            placeholder="Your Password"
            className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="w-full p-3 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
