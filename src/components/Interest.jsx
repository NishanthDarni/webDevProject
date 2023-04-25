import axios from 'axios'
import {useEffect,useState} from 'react'
import Buyer from './Buyer'
import { useLocation } from "react-router-dom";
import '../css/interest.css'
function Interest(props){
    const state = useLocation();
    const [data,setData]=useState([])
    document.body.style.backgroundColor="white"
    useEffect(()=>{
        const fetch=async()=>{
            const fData=new FormData()
            fData.append('productID',state.state.productID)
            fData.append('sellerID',window.sessionStorage.getItem('userID'))
            const uri="http://localhost:80/php-react/getInterest.php"
            const resp=await axios.post(uri,fData,{validateStatus: () => true})
            setData(resp.data)
        }
        fetch()
    },[])
    return(
        <>
        <div className="interests">
        {data!="0 results"?data.map((e)=>{
            const obj=JSON.parse(e)
            return(
               <Buyer buyerName={obj.name} phoneNo={obj.phoneNo} email={obj.email}/>
            )
        }):"No interest till now"}
        </div>
        </>
    )
}

export default Interest;