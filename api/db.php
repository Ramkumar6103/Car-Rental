<?php

$hostname = "localhost";
$username = "root";
$password = "password";
$dbname = "rental_db";
$conn = new mysqli($hostname, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>