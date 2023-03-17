import Nav from "./Nav";
import Product from "./Product";
import "../css/home.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const execute = async () => {
      const uri = "http://localhost:80/php-react/getProduct.php";
      const resp = await fetch(uri);
      if (!resp.ok) {
        throw new Error();
      }
      const res = await resp.json();
      setData(res);
    };
    execute();
  }, []);
  return (
    <>
      <Nav />
      <div className="suggestion">
      {data.slice(0,11).map((e) => {
        {
          const obj = JSON.parse(e);
          return (
            
              <Product price={obj.price} lap_name={obj.lap_name} feature={obj.feature} img_src={obj.img_src} description={obj.description}/>
          );
        }
      })}
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
