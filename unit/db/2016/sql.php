<?php
  $str = file_get_contents('./option.json');
  $json = json_decode($str);
  $dbhost = $json -> {'host'};
  $dbuser = $json -> {'user'};
  $dbpass = $json -> {'password'};
  $dbname = $json -> {'database'};

  $connection = mysql_connect($dbhost, $dbuser, $dbpass) or die('Error with MySQL connection');
  mysql_select_db($dbname);

  mysql_query("CREATE TABLE `test` (name VARCHAR(10), age int)");
  mysql_query("INSERT INTO `test` (`name`, `age`) VALUES ('hohala', '22'), ('hohala', '23'), ('kirayue', '22')");
  echo(mysql_query("SELECT * FROM  `test` WHERE name='hohala'")."\n");
  mysql_query("UPDATE `test` SET age=25 WHERE name='kirayue'");
  mysql_query("DELETE FROM `test` WHERE name='hohala'");
  mysql_query("DROP TABLE `test`");
?>
