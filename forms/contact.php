<?php
// Define the email address where you want to receive the form data
$to_email = "jcmalunjao@gmail.com";

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Create the email message
  $email_message = "Name: $name\n";
  $email_message .= "Email: $email\n";
  $email_message .= "Subject: $subject\n";
  $email_message .= "Message: $message\n";

  // Send the email
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  mail($to_email, $subject, $email_message, $headers);

  // Display a success message
  echo "<script>alert('Your message has been sent. Thank you!');</script>";
  echo "<script>window.location.href='index.html';</script>";
} else {
  // Display an error message
  echo "<script>alert('Error sending email.');</script>";
  echo "<script>window.location.href='index.html';</script>";
}
?>