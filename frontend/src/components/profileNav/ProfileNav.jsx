import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./profileNav.css";

const ProfileNav = () => {

  const { id } = useParams();

  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className='profile-container'>
      <div className="profile-navbar">
        <div className="logo">
          <Link to="/">Stay Away</Link>
        </div>
        <div className="profile-links">
          <Link to={`/profile/${id}`}>Profile</Link>
          <Link to="/chat">Messages</Link>
          <Link to={`/reviews/${id}`}>Reviews</Link>
          <button className="logbtn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileNav;