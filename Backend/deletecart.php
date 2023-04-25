<?php
    header("Access-control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    $user_id = $_POST['user_id'];
    $product_id = $_POST['product_id'];

    $conn = new mysqli('localhost','root','','swaplap');
    if($conn -> connect_error){
        echo "error";
        die("connection failed : ".$conn->connect_error);
    }
    else{
    $result=mysqli_query($conn,"delete from `cart` where user_id='$user_id' and product_id='$product_id'");
    echo "product is removed from cart";
    }
?>