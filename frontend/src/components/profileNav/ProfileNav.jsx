import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./profileNav.css";

const ProfileNav = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("user");
        navigate("/login");
      };

    return (
    <div className="profile-navbar">
    <div className="logo">
      <Link to="/">Stay Away</Link>
    </div>
    <div className="profile-links">
    <button className="logbtn" onClick={handleLogout}>
              Log out
            </button>
    </div>
  </div>
  )
}

export default ProfileNav;