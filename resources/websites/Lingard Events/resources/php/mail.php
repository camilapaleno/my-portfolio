<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$bdate = $_POST['bdate'];
$type = $_POST['type'];
$message = $_POST['message'];

$formcontent=" From: $name \n Phone: $phone \n Event Date: $bdate \n Event Type: $type Message: $message";
$recipient = "youremail@here.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>