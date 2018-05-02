<?php
$config = include('config.php');

$link = mysqli_connect($config['mysql']['host'], $config['mysql']['username'], $config['mysql']['passwd'], $config['mysql']['dbname']);
if (!$link) {
  die('fail to connect: ' . mysqli_connect_error());
}

#! change table
if ($_REQUEST['id']) { # insert
  $sql = "INSERT INTO `wp2017_ta`.`AgeData` (`id`, `name`, `age`) VALUES ('{$_POST['id']}', '{$_POST['name']}', '{$_POST['age']}');";
  if (!mysql_query($sql, $link)) {
    die('fail to insert: ' . mysql_error();
  }
} else {# query
  $sql = "SELECT * FROM `AgeData` WHERE `name`='{$_POST['name']}'";
  $result = mysql_query($sql, $link);
  if ($result) {
    echo mysql_result($res,0,1)." your age is ".mysql_result($res,0,2);
  } else {
    die('fail to query: ' . mysql_error();
  }
}

mysqli_close($link);

# vi:et:sw=2:ts=2
?>
