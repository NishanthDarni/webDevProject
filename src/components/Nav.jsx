import React from 'react'
import {Link} from 'react-router-dom'
import '../css/link.css'
import '../css/nav.css'
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import {useEffect,useState} from 'react'
function Nav()
{
    const navigate = useNavigate();
    document.body.style.backgroundColor="white"
    const [name,setName]=useState();
    const func=async()=>{if(window.sessionStorage.getItem('userID'))
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
    const search=(e)=>{
      e.preventDefault()
      const s=document.querySelector('#search_item')
      if(s.value.length==0)
      {
        alert('You didnot searched anything')
      }else{
        alert(s.value)
        navigate('/search',{
          state:{
            'value':s.value
          }
        })
      }
    }
    func()
    return (
      <nav class="navbar navbar-inverse bs-dark p-5">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">swapLap</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="#">Homepage <span class="sr-only">(current)</span></a></li>
          <li className="nav-item" id='nav_sell'>
                <Link to='/sell' className="nav-link">SELL</Link>
          </li> 
        </ul>
        <form class="navbar-form navbar-left form-horizontal" role="search">
            <div class="input-group" style={{'display':'flex'}}>
               <input type="text" id="search_item" class="search-box" placeholder="Search"/>
               <button type="submit" class="btn" onClick={search}><span class="glyphicon glyphicon-search"></span></button>
            </div>
        </form>
        {(window.sessionStorage.getItem('userID')==null)?(<ul className="nav navbar-nav navbar-right">
              <li className="nav-item nav-item-margin">
                <Link to="/login" className='link forFontStyle'>LOGIN</Link>
              </li>
              <li className="nav-item nav-item-margin">
                <Link to="/signUp" className='link forFontStyle'>SIGN UP</Link>
              </li>
            </ul>):<ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle navbar-img" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {name}
            <img src="http://placehold.it/150x150" class="img-circle" alt="Profile Image" />
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Profile</a></li>
              <li><Link to="/MyProducts">MyProducts</Link></li>
              {/* <li role="separator" class="divider"></li> */}
            </ul>
          </li>
        </ul>}
      </div>
  </nav>
    )
}

export default Nav;