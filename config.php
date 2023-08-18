<?php
// config.php

// Replace these values with your actual database credentials
$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'user_authentication_predact'; // Change this to your actual database name

// Create a new mysqli object to establish the database connection
$connection = new mysqli($hostname, $username, $password, $database);

// Check the connection
if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}
?>
