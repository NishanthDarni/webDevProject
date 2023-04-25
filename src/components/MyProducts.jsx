import axios from 'axios'
import {useEffect,useState} from 'react'
import MyProduct from './MyProduct'
import Nav from './Nav'
function MyProducts()
{
    const [data,setData]=useState([])
    useEffect(()=>{
        async function fetchData() {
            const fdata=new FormData();
            const uri="http://localhost:80/php-react/MyProducts.php"
            fdata.append('userID',window.sessionStorage.getItem('userID'))
            const resp=await axios.post(uri,fdata,{validateStatus: () => true})
            setData(resp.data)
          }
          fetchData();
        }
    ,[])
    return(
        <>
        <Nav/>
        <div className="suggestion">
        {data!="0 results"?data.map((e)=>{const obj = JSON.parse(e);
            return (
              <MyProduct
                price={obj.price}
                lap_name={obj.lap_name}
                feature={obj.feature}
                img_src1={obj.img_src1}
                img_src2={obj.img_src2}
                img_src3={obj.img_src3}
                img_src4={obj.img_src4}
                img_src5={obj.img_src5}
                img_src6={obj.img_src6}
                description={obj.description}
                productID={obj.productID}
              />)}):"No products"}
            </div>
        </>
    )
}

export default MyProducts;