<?php
$servername = "localhost";
$username = "admin";
$password = "password";
$dbname = 'vue';

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";
?>