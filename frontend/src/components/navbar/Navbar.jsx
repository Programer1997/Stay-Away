import { useContext, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const [dropMenuOpen, setDropMenuOpen] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setDropMenuOpen(false);
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleDropMenu = () => {
    setDropMenuOpen(true);
  };

  const menuProfile = () => {
    setDropMenuOpen(false);
    navigate(`/profile/${user.details._id}`);
  };
  const handleClickOutside = (event) => {
    if (dropMenuOpen === true) {
      if (event.target.closest(".dropMenuContainer") === null) {
        setDropMenuOpen(false);
      }
    }
  };

  return (
    <div className="navbar" onClick={handleClickOutside}>
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="logo">StayAway</span>
        </Link>

        {/* //if user is logged in */}
        {user ? (
          <>
            <span className="userName">
              Welcome Back, {user.details.firstName}{" "}
            </span>
            <div className="btn-container">
              {user.isAdmin === true ? (
                <p
                  className="adminAccess"
                  onClick={() => navigate("/dashBoardAdmin")}
                >
                  Admin Panel
                  <span>&#10132;</span>
                </p>
              ) : null}
              {/*<button className="logoutBtn" onClick={handleLogout}>
                Log out
              </button>*/}
              <img
                src={process.env.PUBLIC_URL + "/images/client.png"}
                alt="client charging..."
                className="imgNavBar"
                onClick={handleDropMenu}
              />
            </div>
            {dropMenuOpen ? (
              <div className="dropMenuContainer">
                <p className="logoutText" onClick={handleLogout}>
                  Logout
                </p>
                <p className="profileText" onClick={menuProfile}>
                  Profile
                </p>
              </div>
            ) : null}
          </>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
