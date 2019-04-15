<?php
$config = include('config.php');

$mysqli = new mysqli($config['mysql']['host'], $config['mysql']['username'], $config['mysql']['passwd'], $config['mysql']['dbname']);
if ($mysqli->connect_errno) {
  die('fail to connect: ' . $mysqli->connect_error);
}

if ($_REQUEST['id']) { # insert
  $sql = "INSERT INTO `student_course` (`sid`, `cid`) VALUES ('{$_POST['id']}', '{$_POST['course']}');";
  if (!$mysqli->query($sql)) {
    die('fail to insert: ' . $mysqli->error);
  }
} else { # query
  $sql = "SELECT student.id, student.name FROM student
    JOIN student_course ON student_course.sid = student.id
    JOIN course ON course.id = student_course.cid
    WHERE course.name LIKE '{$_REQUEST['name']}'";
  if ($result = $mysqli->query($sql)) {
    $students = $result->fetch_all();
    foreach ($students as $student) {
      echo $student[1].' ';
    }
  } else {
    die('fail to query: ' . $mysqli->error);
  }
}

mysqli_close($link);

# vi:et:sw=2:ts=2
?>
