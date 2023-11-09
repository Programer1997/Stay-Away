import React, { useState } from "react";
import "./register.css";
import Navbar from "../../components/navbar/Navbar";
//import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Register() {
  //const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("button submit correctly working");
    clean();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const clean = () => {
    setFormData(initialValues);
  };

  return (
    <>
      <Navbar />

      <div className="formRegister">
        <div className="text">
          <p>START FOR FREE</p>
          <h1>
            Create new account <span id="point">.</span>
          </h1>
          <p>
            Already A Member?<a href="/login">Log in</a>
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="fullName">
            <div className="form-floating mb-3" id="nameFL">
              <input
                className="form-control"
                id="floatingInput"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label for="floatingInput">First name</label>
            </div>

            <div className="form-floating mb-3" id="nameFL">
              <input
                className="form-control"
                id="floatingInput"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label for="floatingInput">Last name</label>
            </div>
          </div>

          <div className="form-floating mb-3" id="elementForm">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="name@example.com"
              id="floatingInput"
            />
            <label for="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3" id="elementForm">
            <input
              className="form-control"
              id="floatingInput"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=""
            />
            <label for="floatingInput">Password</label>
          </div>

          <div className="buttonsRegister">
            <button className="btn btn-light" id="btn-ChangeMethod">
              Change Method
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              id="btn-CreateAccount"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
