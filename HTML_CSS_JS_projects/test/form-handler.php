<?php 

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_form = "faculties@college.com"

$emai_subject = "New Form Submission";

$email_body = "User Name: $name. \n".
                "User Email: $visitor_email. \n".
                "Subject: $subject. \n".
                "User Message: $message .\n";

$to = "santoshsuraj7149@gmail.com"

$headers = "From: $email_form \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $emai_subject, $email_body, $headers);

header("Location: contact.html");
?>