import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("https://6670e8c80900b5f8724bea6e.mockapi.io/authentication")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const user = data.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-95">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between m-2">
          <h1>Login</h1>
          <Link to="/">
          <button className="btn btn-primary">Signup</button>
          </Link>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            style={{ width: "400px" }}
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="Password"
            className="form-control"
            style={{ width: "400px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
