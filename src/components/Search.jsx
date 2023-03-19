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
            fdata.append('value',state.state.value)
            const resp=await axios.post(uri,fdata)
            setData(resp.data);
        }
        post()
    })
    return (
        <>
          <Nav/>
          {data=="0 results"?(<div>No results found</div>):(<div className="suggestion">
          {data.slice(0,11).map((e) => {
            {
              const obj = JSON.parse(e);
              return (
                
                  <Product price={obj.price} lap_name={obj.lap_name} feature={obj.feature} img_src={obj.img_src} description={obj.description}/>
              );
            }
          })}
          </div>)}
        </>
      );
}

export default Search;