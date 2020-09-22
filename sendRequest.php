<?php
$fname = $_POST['fname'];
$lname = $_POST['lname']; 
$company = $_POST['company'];
$address = $_POST['address'];
$city = $_POST['city']; 
$state = $_POST['state'];
$zipcode = $_POST['zipCode']; 
$visitor_email = $_POST['email'];
$visitor_phone = $_POST['phoneNumber']; 
$visitor_subject =$_POST['subject']; 
$service = $_POST['service']; 
$date = $_POST['date']; 
$time = $_POST['time']; 
$comments = $_POST['comments'];
//Validate first
if(empty($fname)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}
if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
$email_from = 'shinengo5@gmail.com';//<== update the email address
$email_subject = "ShineNGo Auto Detailing | Appointment Request";
$email_body = "A new appointment request has been generated for:  $fname $lname  \n ".
":::Customer Information::: \n \n". 
"Company:  $company \n".  
"Address:  $address \n".
"City:  $city \n".
"State:  $state \n".
"Zip Code:  $zipcode \n". 
"E-mail Address:  $visitor_email \n".
"Phone Number:  $visitor_phone \n \n".
"::: Appointment Information :::  \n". 
"Requested Service: $service. \n". 
"Date:  $date \n".
"Time:  $time \n".
"Comments:\n $comments \n".
//shinengo5@gmail.com
$to = "shinengo5@gmail.com, $visitor_email" ;//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
header('Location: thank-you.html#thank_you');
?> 
