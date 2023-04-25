<?php
    header("Access-control-Allow-Origin:*");
	header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    $userid=$_POST['userID'];
    $productid=$_POST['productID'];
    $conn=new mysqli('localhost','root','','swaplap');
    if($conn->connect_error){
        echo "error";
        die("connection falied: ".$conn->connect_error);
    }
    else{
        $query=mysqli_query($conn,"select * from `cart` where userID='$userid' and productID='$productid'");
        $res=mysqli_num_rows($query);
        if($res>0){
            echo "item already added to cart";
        }
        else{
            $stmt = $conn->prepare("insert into cart(userID,productID) values(?, ?)");
		    $stmt->bind_param("ii", $userid,$productid);
		    $execval = $stmt->execute();
            echo "item added to the cart";
        }
    }
?>