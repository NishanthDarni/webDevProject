import "../css/product.css";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'
const Product = (props) => {
  const navigate = useNavigate();
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
  function buy(e){
    navigate('/buy',{state:{
      'productID':e
    }})
  }
  return (
    <div className="product_container" onClick={()=>{buy(props.productID)}}>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
  {/* <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
    <li data-target="#myCarousel" data-slide-to="5"></li>
  </ol> */}

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

  {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a> */}
</div>
      <hr style={{'height':'5px','font-weight':'bold'}}></hr>
      <div className="product_details">
        <div className="product price">₹{props.price}</div>
        <div className="product name">{props.lap_name}</div>
        <div className="product features">{props.feature}</div>
        <div className="product description">{props.description}</div>
      </div>
    </div>
  );
};

export default Product;
