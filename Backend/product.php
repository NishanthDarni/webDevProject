<?php
    header("Access-control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    $conn = new mysqli('localhost','root','','swapLap');
    $productID=$_POST['productID'];

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM products where productID=$productID";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    // output data of each row
    $return_result=array();
    while($row = $result->fetch_assoc()) {
        $temp=array(
             "lap_name"=>$row["lap_name"] ,
              "model"=>$row["model"],
              "price"=>$row['price'],
              "description"=>$row['description'],
              "img_src1"=>$row['image1'],
              "img_src2"=>$row['image2'],
              "img_src3"=>$row['image3'],
              "img_src4"=>$row['image4'],
              "img_src5"=>$row['image5'],
              "img_src6"=>$row['image6'],
              "processor"=>$row['processor'],
              "ram"=>$row['ram'],
              "productID"=>$row['productID'],
              "sellerID"=>$row['userID'],
              "ssd"=>$row['ssd'],
              "hdd"=>$row['hdd'],
              "os"=>$row['os'],
              "screen"=>$row['screen'],
              "color"=>$row['color'],
              "userID"=>$row['userID']
            );
        $temp=json_encode($temp);
        $return_result[]=$temp;
    }
    echo json_encode($return_result);
    } else {
    echo "0 results";
    }

?>