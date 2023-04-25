<?php
    header("Access-control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    $conn = new mysqli('localhost','root','','swapLap');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $seller_id=$_POST['sellerID'];
    $product_id=$_POST['productID'];
    $buyer_id=$_POST['buyerID'];

    if($query = $conn->prepare("insert into interest(sellerID,buyerID,productID) values(?,?,?)")) { // assuming $mysqli is the connection
        $query->bind_param("iii",$seller_id,$buyer_id,$product_id);
        $execval = $query->execute();
        $query->close();
        $conn->close();
    }else{
        echo "error";
    }

?>