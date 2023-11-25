import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./profile.css";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import ProfileNav from "../../components/profileNav/ProfileNav";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

  const [currentUser, setCurrentUser] = useState({
    fname: "",
    lname: "",
    Email: ""
  });

  useEffect(() => {
    Axios.get(`http://localhost:8000/api/users/${id}`, { withCredentials: true })
      .then((response) => {
        setUserData(response.data);
        setCurrentUser({
          fname: response.data.firstName,
          lname: response.data.lastName,
          Email: response.data.email
        });
      })
      .catch((err) => {
        console.log(`Error in request: ${err}`);
      });
  }, [id]);


  const handleSubmit = (event) => {
    event.preventDefault();
    postDataServer(currentUser);
  };

  const postDataServer = (currentUser) => {
    Axios.put(`http://localhost:8000/api/users/${id}`, {
      firstName: currentUser.fname,
      lastName: currentUser.lname,
    }, { withCredentials: true })
      .then((response) => {
        setUserData(response.data);
        setCurrentUser({
          fname: response.data.firstName,
          lname: response.data.lastName,
          Email: response.data.email
        });
        toast.success('User information edited successfully!', {
          autoClose: 2000,
        });
      })
      .catch((err) => {
        toast.error('User information editing failed!', {
          autoClose: 2000,
        });
        console.log(`we have an error in this request, ${err}`);
      });
  };



  const changingField = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value
    });
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>

      <ProfileNav />

      <div className="profileRegister">
        <div className="text">
          <h1>User Profile</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="fullName">
            <div className="form-floating mb-3" id="nameFL">
              <input
                className="form-control"
                type="text"
                name="fname"
                value={currentUser.fname || ''}
                placeholder="Francisco"
                onChange={changingField}
              />
              <label>First name</label>
            </div>

            <div className="form-floating mb-3" id="nameFL">
              <input
                className="form-control"
                type="text"
                name="lname"
                value={currentUser.lname || ''}
                placeholder="Murcia"
                onChange={changingField}
              />
              <label>Last name</label>
            </div>
          </div>

          <div className="form-floating mb-3" id="elementForm">
            <input
              type="email"
              name="Email"
              value={currentUser.Email || ''}
              readOnly
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>

          <div className="buttonsRegister">
            <button type="submit" className="btn btn-primary" id="btn-ChangeMethod">
              Save
            </button>

            <Link to={`/changepassword/${id}`} className="btn btn-danger" id="btn-CreateAccount">
              Change Password
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}