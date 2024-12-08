
<?php
$servername = "localhost";
$username = "email";
$password = "pass1";
$database = "user";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>