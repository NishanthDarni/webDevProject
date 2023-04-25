<?php
    header("Access-control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    $conn = new mysqli('localhost','root','','swapLap');
    $userID=$_POST['userID'];
    $productID=$_POST['productID'];
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    $result = mysqli_query($conn,"delete FROM `products` where productID='$productID' and userID='$userID'");
    echo $result;
?>