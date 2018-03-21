<?php
$fname = $_GET["fname"];
$lname = $_GET["lname"];
sleep(2); # pretend to spend some processing time
echo "Hello, {$fname} {$lname}"; # no <h1> tag in comparison with get/post version
?>
