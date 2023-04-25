import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import "../css/buy.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Buy() {
  const state = useLocation();
  const [data, setData] = useState([]);
  const [userDetails,setDetails]=useState([])
  //now using productID all the details of product have to be fetched
  // const sendRequest=async()=>{
  //    if(window.sessionStorage.getItem('userID')==null)
  //    {
  //     alert('Login to buy product')
  //     return
  //    }
  //    const uri="http://localhost:80/php-react/sendInterest.php"
  //    const fdata=new FormData()
  //    fdata.append('sellerID',data['userID'])
  //    fdata.append('buyerID',window.sessionStorage.getItem('userID'))
  //    fdata.append('productID',data['productID'])
  //    const resp=await axios.post(uri,fdata)  
  // } 

  const addCart=async()=>{
    if(window.sessionStorage.getItem('userID')==null)
     {
      alert('Login to add cart product')
      return
     }
     const uri="http://localhost:80/php-react/addcart.php"
     const fdata=new FormData()
     fdata.append('userID',window.sessionStorage.getItem('userID'))
     fdata.append('productID',data['productID'])
     const resp=await axios.post(uri,fdata)  
  }
  useEffect(() => {
    const get1 = async () => {
      const uri = "http://localhost:80/php-react/product.php";
      const fdata = new FormData();
      fdata.append("productID", state.state.productID);
      const resp = await axios.post(uri, fdata);
      setData(JSON.parse(resp.data[0]));
      const uri1 = "http://localhost:80/php-react/getUser.php";
      const fdata1 = new FormData();
      fdata1.append('userID',JSON.parse(resp.data[0])['userID'])
      const resp1=await axios.post(uri1,fdata1)
      setDetails(resp1.data)
    };
    get1();
  }, []);
  return (
    <>
      <Nav />
      <div className="buy_container">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
    <li data-target="#myCarousel" data-slide-to="5"></li>
  </ol>

  <div class="carousel-inner">
    <div class="item active">
        <img class="d-block w-50" style={{'height':'400px'}} src={'http://localhost:80/php-react/images/'+data['img_src1']} alt="First image"/>
      </div>
      <div class="item">
        <img class="d-block w-50" style={{'height':'400px'}} src={'http://localhost:80/php-react/images/'+data['img_src2']} alt="Second image"/>
      </div>
      <div class="item">
        <img class="d-block w-50" style={{'height':'400px'}} src={'http://localhost:80/php-react/images/'+data['img_src3']} alt="Third image"/>
      </div>
      <div class="item">
        <img class="d-block w-50" style={{'height':'400px'}} src={'http://localhost:80/php-react/images/'+data['img_src4']} alt="Fourth image"/>
      </div>
      <div class="item">
        <img class="d-block w-50" style={{'height':'400px'}} src={'http://localhost:80/php-react/images/'+data['img_src5']} alt="Fifth image"/>
      </div>
      <div class="item">
        <img class="d-block w-50" style={{'height':'400px'}} src={'http://localhost:80/php-react/images/'+data['img_src6']} alt="Sixth image"/>
      </div>
  </div>

  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        <div className="buy_details">
            <div className="buy_text">{data['lap_name']+' '+data['model']+' '+','+' '+data['ssd']+' '+'SSD'+' '+','+' '+data['hdd']+' '+'HDD'+' '+','+' '+data['ram']+' '+'RAM'+','+' '+data['os']+' '+','+' '+data['screen']+' '+'inches'+','+' '+data['color']+' '+'color'}</div>
            <div className="buy_item_2"><h2>Price : <span className="buy_price">₹{data['price']}</span></h2></div>
            {/* <button className="buy_button" onClick={sendRequest}><FavoriteIcon/> Send Interest</button> */}
            <button className="buy_cart" onClick={addCart}><ShoppingCartIcon/>Add to cart</button>
            <br />
            <h7>(*By clicking on interest your phone number is given to seller)</h7>
        </div>
        <div className="seller_details">
          <h2 style={{'color':'red'}}>Seller details</h2>
          <hr style={{'color':'grey'}}/>
          <div>Name : {userDetails['name']}</div>
          <div>Mobile Number : {userDetails['phoneNo']}</div>
          <div>Email : {userDetails['email']}</div>
        </div>
      </div>
    </>
  );
}
export default Buy;
