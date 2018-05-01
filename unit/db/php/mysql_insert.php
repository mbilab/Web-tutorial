<?php
$config = include('config.php');

$con = mysql_connect('localhost', $config['mysql']['user'], $config['mysql']['password']);
if (!$con) {
	die("Cannot connect to mysql".mysql_error());
}

mysql_select_db($config['mysql']['dbname']);
$sql = "INSERT INTO `wp2017_ta`.`AgeData` (`id`, `name`, `age`) VALUES ('{$_POST['id']}', '{$_POST['name']}', '{$_POST['age']}');";
if (mysql_query($sql, $con)) {
	echo "Insert success";
} else {
	echo "Insert failed".mysql_error();
}

mysql_close($con);
?>
