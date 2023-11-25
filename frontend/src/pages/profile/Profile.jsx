import React, { useState } from "react";
import Axios from "axios";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    postDataServer(formData);
    console.log("form data from Frontend (register component)  : ");
    console.log(formData);
    clean();
    navigate("/login");
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
  const postDataServer = (formData) => {
    Axios.post("/auth/register", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(`we have an error in this request, ${err}`);
      });
  };

  return (
    <>
      <div className="profile-navbar">

      <div className="logo">
        
        <Link to="/">

        Stay Away

        </Link>

        </div>
<div className="profile-links">
    
<Link to="/profile">
    Profile
    </Link>
    <Link to="/profile">
    Profile
    </Link>
    <Link to="/profile">
    Profile
    </Link>

    </div>


      </div>

      

      <div className="formRegister">
        <div className="text">
          <h1>User Profile</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="fullName">
            <div className="form-floating mb-3" id="nameFL">
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={"John"}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label>First name</label>
            </div>

            <div className="form-floating mb-3" id="nameFL">
              <input
                className="form-control"
                type="text"
                name="lastName"
                value={"Doe"}
                onChange={handleChange}
                placeholder="name@example.com"
              />
              <label>Last name</label>
            </div>
          </div>

          <div className="form-floating mb-3" id="elementForm">
            <input
              type="email"
              name="email"
              value={"JopnDoe@gmail.com"}
              onChange={handleChange}
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>


          <div className="buttonsRegister">
            <button className="btn btn-primary" id="btn-ChangeMethod">
              Save
            </button>
            
                            <Link to="/changepassword" className="btn btn-danger" id="btn-CreateAccount">
              Change Password
            </Link>
           
          </div>
        </form>
      </div>
    </>
  );
}
