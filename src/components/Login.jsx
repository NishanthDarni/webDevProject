import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import Nav from './Nav'
import { useState, useEffect } from "react";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import dog from '../css/images/dog.jpg'
function Login() {
  // document.body.style.backgroundColor = "#3c00a0";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (event
    ) => {
    event.preventDefault();
    const uri = "http://localhost:80/php-react/login.php";
    const fdata = new FormData();
    fdata.append("email", email);
    fdata.append("password", password);
    console.log(fdata);
    const resp = await axios.post(uri, fdata);
    //returns Email if email doesnt exist and Password if password didnt exist
    if (resp.data == "Email") {
      document.querySelector('.status').innerHTML="*No user found with the email given"
    } else if(resp.data=="Password"){
      document.querySelector(".status").innerHTML="*Incorrect password"
    }
    else {
      window.sessionStorage.setItem("userID", resp.data);
      navigate('/');
    }
  };
  return (
    <>
      {/* <div className="home">
        <Link to="../" className="home_link">
          {" "}
          <ArrowBackIcon />
          Home
        </Link>
      </div> */}
      <Nav/>
      <div className="login_container">
      <div className="login">
        <h1 style={{'color':'yellow'}}>Welcome back 👋</h1>
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
          <p className="status"></p>
          <a href="#" className="frgt">
            <p>Forgot password?</p>
          </a>
          <p id="account">
            Don't have an account?
            <Link to="../signUp" className="signUp">SignUp</Link>
          </p>
        </form>
      </div>
      <div>
       <img src={dog} style={{'height':'510px','border-radius':'5px'}} alt="" />
      </div>
      </div>
    </>
  );
}

export default Login;
