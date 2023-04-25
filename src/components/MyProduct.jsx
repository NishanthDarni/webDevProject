import "../css/product.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'
const MyProduct = (props) => {
  const navigate = useNavigate();
  function buy(e){
    console.log(e)
    navigate('/interests',{state:{
      'productID':e
    }})
  }
  useEffect(()=>{
    const interval = setInterval(() => {
      // Run your function here
      let e=document.querySelectorAll('.carousel-inner')
      e.forEach(k => {
        if(k.querySelector('.active').nextElementSibling==null )
        {
          k.querySelector('.active').classList.remove('active')
          k.querySelector('.item').classList.add('active')
        }else{
          k.querySelector('.active').nextElementSibling.classList.add('active')
          k.querySelector('.active').classList.remove('active')
        }
          });
      }, 3000);
  
    return () => clearInterval(interval);
  })
  const remove=async(productID)=>{
    const uri="http://localhost:80/php-react/delete.php"
    const fdata=new FormData();
    fdata.append('userID',window.sessionStorage.getItem('userID'))
    fdata.append('productID',productID)
    const resp=await axios.post(uri,fdata)
    alert(resp.data)
  }
  return (
    <div className="product_container">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="item active">
        <img class="d-block w-100" style={{'width':'100%','height':'200px','border-radius':'5px'}} src={'http://localhost:80/php-react/images/'+props.img_src1} alt="First image"/>
      </div>
      <div class="item">
        <img class="d-block w-100" style={{'width':'100%','height':'200px','border-radius':'5px'}} src={'http://localhost:80/php-react/images/'+props.img_src2} alt="Second image"/>
      </div>
      <div class="item">
        <img class="d-block w-100" style={{'width':'100%','height':'200px','border-radius':'5px'}} src={'http://localhost:80/php-react/images/'+props.img_src3} alt="Third image"/>
      </div>
      <div class="item">
        <img class="d-block w-100" style={{'width':'100%','height':'200px','border-radius':'5px'}} src={'http://localhost:80/php-react/images/'+props.img_src4} alt="Fourth image"/>
      </div>
      <div class="item">
        <img class="d-block w-100" style={{'width':'100%','height':'200px','border-radius':'5px'}} src={'http://localhost:80/php-react/images/'+props.img_src5} alt="Fifth image"/>
      </div>
      <div class="item">
        <img class="d-block w-100" style={{'width':'100%','height':'200px','border-radius':'5px'}} src={'http://localhost:80/php-react/images/'+props.img_src6} alt="Sixth image"/>
      </div>
  </div>
</div>
      <div className="product_details">
        <div className="product price">₹{props.price}</div>
        <div className="product name">{props.lap_name}</div>
        <div className="product features">{props.feature}</div>
        <div className="product description">{props.description}</div>
        <button className="remove_button" onClick={()=>{remove(props.productID)}}>Remove item</button>
      </div>
    </div>
  );
};

export default MyProduct;
