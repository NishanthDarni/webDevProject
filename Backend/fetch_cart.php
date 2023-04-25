<?php
    header("Access-control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    $conn = new mysqli('localhost','root','','swaplap');

    $userid=$_POST['userId'];
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }



    $result = mysqli_query($conn,"select * from `cart` where user_id='$userid'");
    $num=mysqli_num_rows($result);
    if($num > 0) {
    // output data of each row
    $return_result=array();
    while($row = mysqli_fetch_array($result)) {
        $res=mysqli_query($conn,"select * from `products` WHERE product_id='$row[1]'");
        $arr=mysqli_fetch_array($res);
        $temp=array(
            "product_id"=>$arr['product_id'],
             "lap_name"=>$arr["lap_name"] ,
              "price"=>$arr['price'],
              "description"=>$arr['description'],
              "img_src"=>$arr['images1']
            );
        $temp=json_encode($temp);
        $return_result[]=$temp;
    }
    echo json_encode($return_result);
    } else {
    echo "0 results";
    }

?>