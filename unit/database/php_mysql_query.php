<?php
$config = include('config.php');

$con = mysql_connect('localhost', $config['mysql']['user'], $config['mysql']['password']);
if (!$con) {
	die("Cannot connect to mysql".mysql_error());
}

mysql_select_db($config['mysql']['dbname']);
$sql = "SELECT * FROM `AgeData` WHERE `name`='{$_POST['name']}'";
$res = mysql_query($sql, $con);
if ($res) {
	echo mysql_result($res,0,1)." your age is ".mysql_result($res,0,2);
} else {
	echo "Insert failed".mysql_error();
}
?>
