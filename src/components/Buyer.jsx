import '../css/buyer.css'
function Buyer(props)
{
    return(
        <div className="buyer_container">
        <div className="buyer">
            <img src="#" alt="image" />
            <div className="buyer_details">
            <div>{props.buyerName}</div>
            <div>{props.phoneNo}</div>
            <div>{props.email}</div>
            </div>
        </div>
        <button className="buyer_btn">send My details</button>
        </div>
    )
}

export default Buyer;