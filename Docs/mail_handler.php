<?php 
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
if (isset($_POST['submit'])){
	$to = "supportservices@ssuiteoffice.com";
    $from = $_POST['email'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
	header('Location: ../software.htm');
    }
?>