import axios from "axios"
import { AuthContext } from "../../context/authContext"
import "./login.css"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";




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
    <div>
        <Navbar />  
    <div className="login">
        
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
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
      </div>
    </div>
    </div>
  )
}

export default Login