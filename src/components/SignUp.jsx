import React from 'react'
import { Link } from 'react-router-dom';
import '../css/signUp.css'
import '../css/link.css'
import {useState} from 'react'
import axios from 'axios'
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Nav from './Nav'
import dog2 from '../css/images/dog2.jpg'
function SignUp(){
    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmPassword]=useState('')
    const handleSubmit=async(event)=>
    {
        //handle all cases
        event.preventDefault()
        console.log('Hello world')
        const uri='http://localhost:80/php-react/connect.php'
        let fdata=new FormData()
        fdata.append('name',name)
        fdata.append('mobile',mobile)
        fdata.append('email',email)
        fdata.append('password',password)
        const resp=await axios.post(uri,fdata).catch(error=>alert(error))
        if(resp.data=="Fail")
        {
            document.querySelector('.status').innerHTML="*Email already registered"
        }else if(resp.data=="Success")
        {
            document.querySelector('.status').innerHTML="*Succesfully registered"
            setName('')
            setEmail('')
            setMobile('')
            setPassword('')
            setConfirmPassword('')
        }
    }
  return (
    <>
    <Nav/>
    {/* <div className="home"><Link to="../" className="home_link"> <ArrowBackIcon/>Home</Link></div> */}
    <div className="form_container">
        <div className="form-box">
            <h1>Sign Up</h1>
            <form>
                <div className="input-group">
                    <div className="input-field">
                        <PersonIcon/>
                        <input className='input' type="text" id="name" name="name" placeholder="Name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <LocalPhoneIcon/>
                        <input type="number" className='input' autoComplete="off" name="mobileNum" id="mobileNum" placeholder="mobile number" maxLength="10" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <EmailIcon/>
                        <input type="email" className='input' autoComplete="off" name="email" id="emailSign" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <LockIcon/>
                        <input type="password" className='input' name="pswd" id="pswrd" placeholder="Password" maxLength="20" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <LockIcon/>
                        <input type="password" className='input' name="pswd" id="pswrd" placeholder="Confirm Password" maxLength="20" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </div>
                    <p><span style={{'color':'white'}}>Forgot Password?</span> <a href="#">Click Here!</a></p>
                </div>
                <div className="btn-field">
                <button id="submit" type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <p className='status'></p>
            <p>
            <span style={{'color':'white'}}>Already have an account?</span>
                <Link to='../login' style={{textDecoration:'none'}}>Login</Link>
            </p>
        </div>
    </div>
        </>
  )
}

export default SignUp;