import "../css/product.css";
const Product = (props) => {
  return (
    <div className="product_container">
      <img className="product img" src={'http://localhost:80/php-react/images/'+props.img_src} alt="Lap" />
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
