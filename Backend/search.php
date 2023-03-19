<?php
    header("Access-control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    $conn = new mysqli('localhost','root','','registration');

    $value=$_POST['value'];
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }



    $sql = "SELECT * FROM products where lap_name='$value'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    // output data of each row
    $return_result=array();
    while($row = $result->fetch_assoc()) {
        $temp=array(
             "lap_name"=>$row["lap_name"] ,
              "price"=>$row['price'],
              "description"=>$row['description'],
              "img_src"=>$row['images']
            );
        $temp=json_encode($temp);
        $return_result[]=$temp;
    }
    echo json_encode($return_result);
    } else {
    echo "0 results";
    }

?>