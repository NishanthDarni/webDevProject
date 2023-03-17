import React from 'react'
import {Link} from 'react-router-dom'
import '../css/link.css'
import '../css/nav.css'
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import {useEffect,useState} from 'react'
function Nav()
<<<<<<< HEAD
{   document.body.style.backgroundColor="aliceblue"
    
=======
{   document.body.style.backgroundColor="white"
    const [name,setName]=useState();
    useEffect(()=>{
    const func=async()=>{if(window.localStorage.getItem('userID'))
    {
    const uri='http://localhost:80/php-react/getUserName.php'
    const fdata=new FormData()
    fdata.append('userID',window.sessionStorage.getItem('userID'))
    const temp=await axios.post(uri,fdata)
    if(temp.data!='error')
    {
      setName(temp.data);
    }
    }}
    func()
    },[])
>>>>>>> work
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand forFontStyle" href="#">OLX</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link forFontStyle" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <Link to='/sell' className="nav-link">SELL</Link>
              </li> 
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn bg-dark btn-search" type="submit"><SearchIcon/></button>
            </form>
<<<<<<< HEAD
            {(window.localStorage.getItem('userID')==null)?(<ul className="navbar-nav">
=======
            {(window.sessionStorage.getItem('userID')==null)?(<ul className="navbar-nav">
>>>>>>> work
              <li className="nav-item nav-item-margin">
                <Link to="/login" className='link forFontStyle'>LOGIN</Link>
              </li>
              <li className="nav-item nav-item-margin">
                <Link to="/signUp" className='link forFontStyle'>SIGN UP</Link>
              </li>
<<<<<<< HEAD
            </ul>):<li>{window.localStorage.getItem('userID')}</li>}
=======
            </ul>):<ul className="navbar-nav"><li className="nav-item nav-item-margin">
                {name}
              </li></ul>}
>>>>>>> work
          </div>
        </div>
      </nav>
    )
}

export default Nav;