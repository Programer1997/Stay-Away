import axios from "axios"
import { AuthContext } from "../../context/authContext"
import "./login.css"
import { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";



const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

//handle change function:
const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //handle click function:
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try{
        const res = await axios.post("/auth/login", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/")
    }catch(err){
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

    const { loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

  return (
    <div className="login">
          <div className="nav">
                <div className="navLogin">
                    <h1 className="logo">StayAway</h1>                   
                </div>
          </div>


    <div className="login">
        
      <div className="lContainer">
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
        <span className="registerLink">Dont have an account yet? You can <Link>register now!</Link></span>
      </div>
    </div>
    </div>
  )
}

export default Login
