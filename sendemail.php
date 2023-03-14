<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'your-email-address@example.com';
    $subject = 'New message from your portfolio website';
    $headers = "From: $name <$email>";
    mail($to, $subject, $message, $headers);
}
$to = 'rubendfraga@gmail.com';
?>

