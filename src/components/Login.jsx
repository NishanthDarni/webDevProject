import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Login() {
  document.body.style.backgroundColor = "#3c00a0";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  // useEffect(()=>{{
  //     if(window.sessionStorage.getItem('userID')!=null)
  //     {
  //         navigate("/")
  //     }
  // }},[])
  const handleSubmit = async () => {
    const uri = "http://localhost:80/php-react/login.php";
    const fdata = new FormData();
    fdata.append("email", email);
    fdata.append("password", password);
    console.log(fdata);
    const resp = await axios.post(uri, fdata);
    alert(resp.data);
    if (resp.data == "Failed") {
      console.log("failed");
    } else {
      window.sessionStorage.setItem("userID", resp.data);
    }
  };
  return (
    <>
      <div className="home">
        <Link to="../" className="home_link">
          {" "}
          <ArrowBackIcon />
          Home
        </Link>
      </div>
      <div className="login">
        <h1 className="loginText">Login</h1>
        <form>
          <div className="box">
            <EmailIcon />
            <input
              className="input-1"
              type="email"
              name="emailId"
              id="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="box">
            <LockIcon />
            <input
              className="input-1"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>
          <a href="#" className="frgt">
            <p>Forgot password?</p>
          </a>
          <p>
            Don't have an account?
            <Link to="../signUp">SignUp</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
