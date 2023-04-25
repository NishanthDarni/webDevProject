import {useLocation} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Product from './Product'
import Nav from './Nav'
function Search()
{
    const state=useLocation()
    const [data, setData] = useState([]);
    useEffect(()=>{
        const post=async()=>{
            const uri = "http://localhost:80/php-react/search.php";
            const fdata=new FormData()
            fdata.append('userID',window.sessionStorage.getItem('userID'))
            fdata.append('value',state.state.value)
            const resp=await axios.post(uri,fdata)
            setData(resp.data);
            alert(resp.data)
        }
        post()
    },[state])
    return (
        <>
          <Nav/>
          {data=="0 results"?(<div>No results found</div>):(<div className="suggestion">
          {data.slice(0,11).map((e) => {
            {
              const obj = JSON.parse(e);
              return (
                  <Product productID={obj.productID} price={obj.price} lap_name={obj.lap_name} feature={obj.feature} img_src1={obj.img_src1}
                  img_src2={obj.img_src2}
                  img_src3={obj.img_src3}
                  img_src4={obj.img_src4}
                  img_src5={obj.img_src5}
                  img_src6={obj.img_src6} description={obj.description}/>
              );
            }
          })}
          </div>)}
        </>
      );
}

export default Search;