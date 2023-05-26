<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];

$to = "russeljamesrecamunda@gmail.com";
$subject = "Mail From profile Website";
$txt ="Name: ".$name. 
"\r\n Email: " .$email. 
"\r\n Message: " .$message;
$headers = "From: RecamundaWebsite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
