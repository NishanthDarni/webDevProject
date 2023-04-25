import Nav from "./Nav";
import Product from "./Product";
import "../css/home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const execute = async () => {
      const uri = "http://localhost:80/php-react/getProduct.php";
      const fdata=new FormData()
      fdata.append('userID',window.sessionStorage.getItem('userID'))
      const resp = await axios.post(uri,fdata,{validateStatus: () => true});
      setData(resp.data);
    };
    execute();
  }, []);
  return (
    <>
      <Nav />
      <div className="suggestion">
        {data!="0 results"?data.slice(0, 11).map((e) => {
          {
            const obj = JSON.parse(e);
            return (
              <Product
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
              />
            );
          }
        }):"No data found"}
      </div>
    </>
  );
}
// function Home() {
//   const [data, setData] = useState({ row: [] });
//   useEffect(() => {
//     const execute = async () => {
//       const uri = "http://localhost:80/php-react/getProduct.php";
//       const resp = await axios.get(uri);
//       alert(resp.data);
//       console.log(resp.data);
//       if (resp.data !== "error") {
//         setData({ row: [resp.data] });
//       }
//     };
//     execute();
//   }, []);
//   return (
//     <>
//       <Nav />
//       {data.row.map((e) => {
//         {
//           console.log("item");
//           console.log(e);
//           return (
//             <div className="suggestion">
//               <Product
//                 price={e.price}
//                 lap_name={e.lap_name}
//                 features={e.feature}
//               />
//             </div>
//           );
//         }
//       })}
//       {/* {{data.row.map((response,i)=>{return (<div className="suggestion">
//         <Product price={datum.price} lap_name={datum.lap_name} features={datum.feature}/>
//         </div>)})}} */}
//     </>
//   );
// }

export default Home;
