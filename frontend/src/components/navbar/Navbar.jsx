import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  //console.log(user);
  const navigate = useNavigate();

  // const onRent = useCallback(()=>{
  //   if(!user) {
  //     navigate("/login")
  //   }
  //   //suprotno
  //   rentModal.onOpen();

  // }, [user, navigate])

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
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
              <button className="logoutBtn" onClick={handleLogout}>
                Log out
              </button>
            </div>
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
