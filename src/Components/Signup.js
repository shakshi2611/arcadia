import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message

  const header = { "Access-control-allow-origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://6670e8c80900b5f8724bea6e.mockapi.io/authentication", {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        setAlertMessage("Signup successful!");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        setAlertMessage("Signup failed. Please try again.");
      });
  };

  return (
    // <div className="d-flex justify-content-center align-items-center vh-95">
    //   <form>
    //     <div className="d-flex justify-content-between m-2">
    //       <h1>Sign UP</h1>
    //       <Link to="/Login ">
    //         <button className="btn btn-primary">Login</button>
    //       </Link>
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Name</label>
    //       <input
    //         type="Text"
    //         className="form-control"
    //         style={{ width: "400px" }}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label className="form-label">Email address</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         style={{ width: "400px" }}
    //         aria-describedby="emailHelp"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label className="form-label">Password</label>
    //       <input
    //         type="Password"
    //         className="form-control"
    //         style={{ width: "400px" }}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>

    //     <button
    //       type="submit"
    //       className="btn btn-primary"
    //       onClick={handleSubmit}
    //     >
    //       Register
    //     </button>
    //   </form>
    // </div>
    <body>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-feild">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-feild">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid"/>

              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container"></div>
      </div>
    </body>
  );
};

export default Signup;
