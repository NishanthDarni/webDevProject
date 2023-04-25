<?php
    header("Access-control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    $conn = new mysqli('localhost','root','','swapLap');
    $productID=$_POST['productID'];
    $sellerID=$_POST['sellerID'];
    // Check connection
    if ($conn->connect_error) {
       die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM interest where productID=$productID and sellerID=$sellerID";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    $return_result=array();
    while($row = $result->fetch_assoc()) {
        $sql1 = "SELECT * FROM signup where id=$row[buyerID] ";
        $result1 = $conn->query($sql1);
        $row1=$result1->fetch_assoc();
        $temp=array(
             "name"=>$row1['name'],
             "phoneNo"=>$row1['number'],
             "email"=>$row1['email']
            );
        $temp=json_encode($temp);
        $return_result[]=$temp;
    }
    echo json_encode($return_result);
    } else {
    echo "0 results";
    }

?>