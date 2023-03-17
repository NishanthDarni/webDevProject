<?php
    header("Access-control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    $name=$_POST['name'];
    $model=$_POST['model'];
    $ssd=$_POST['ssd'];
    $hdd=$_POST['hdd'];
    $processor=$_POST['processor'];
    $ram=$_POST['ram'];
    $color=$_POST['color'];
    $screen=$_POST['screen'];
    $os=$_POST['os'];
    $des=$_POST['description'];
    $price=$_POST['price'];
    $img=$_FILES['image'];
    $user_id=$_POST['userID'];

    $img_name=$_FILES['image']['name'];
    $img_size=$_FILES['image']['size'];
    $tmp_name=$_FILES['image']['tmp_name'];
    $error=$_FILES['image']['error'];
    
    $conn=new mysqli('localhost','root','','registration');
    if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	}
    else{
        if($error===0){
            if($img_size > 12500000){
                $er="Sorry, your file is too large to upload";
                header("Location:ad.html?error=$er");
            }
            else{
                $img_ex = pathinfo($img_name,PATHINFO_EXTENSION);
                $img_ex_lc=strtolower($img_ex);

                $allowed_exs = array("jpg","jpeg","png");
                if(in_array($img_ex_lc,$allowed_exs)){
                    $new_img_name = uniqid("img-",true).'.'.$img_ex_lc;
                    $img_upload_path = 'images/'.$new_img_name;
                    move_uploaded_file($tmp_name,$img_upload_path);
                    if($query = $conn->prepare("insert into products(lap_name,model,ssd,hdd,ram,processor,os,screen,color,description,price,images,userID) values(?,?,?,?,?,?,?,?,?,?,?,?,?)")) { // assuming $mysqli is the connection
                        $query->bind_param("ssssssssssisi",$name,$model,$ssd,$hdd,$ram,$processor,$os,$screen,$color,$des,$price,$new_img_name,$user_id);
                        $execval = $query->execute();
                        echo "your ad is just created";
                        echo "<br>";
                        echo "you can find your ad by typing laptop name in search bar in home page";
                        $query->close();
                        $conn->close();
                        echo "<br>";
                    } else {
                        echo "error"; // 1054 Unknown column 'foo' in 'field list'
                    }
                }
                else{
                    $er="Sorry, you cant upload this type of file";
                    header("Location:ad.html?error=$er");
                }
            }
        }
        else{
            $er="unknown error occured";
            header("Location:ad.html?error=$er");
        }
    }
?>