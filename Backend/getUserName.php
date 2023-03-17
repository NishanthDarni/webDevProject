<?php
    header("Access-control-Allow-Origin:*");
	header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    $userID=$_POST['userID'];
    //database connecion
    $conn = new mysqli('localhost','root','','registration');
	if($conn->connect_error){
		echo "error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$query1=mysqli_query($conn,"select * from `signup` where id='$userID'");
		$result=mysqli_num_rows($query1);
		if($result==1){
			$row=mysqli_fetch_array($query1);
            echo "$row[1]";
		}
		else{
			echo "error";
		}
	}
?>