import React, { useState } from "react";
import  "../Style/Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "@gmail.com" && password === "") {

      
      setMsg("Login Successful");
    } else {
      setMsg("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <p>{msg}</p>
    </form>
    </div>
  );
}

export default Login;
