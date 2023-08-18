<?php
// Start the session to access session variables
session_start();

// Check if the 'loggedin' session variable is set to true
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    // User is not logged in, redirect to the login page
    header('Location: login.html');
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name='language' content='NL'>
    <title>Predact - Home</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <h1>Successful</h1>
    <p>This is a protected page. Only logged-in users can access this content.</p>
</body>
</html>
