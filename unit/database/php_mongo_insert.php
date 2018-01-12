<?php
$config = include('config.php');

$url = "mongodb://{$config['mongo']['user']}:{$config['mongo']['password']}@localhost/wp2017_ta";
$mongoClient = new MongoClient($url);
$db = $mongoClient->$config['mongo']['dbname'];

$collection = $db->agedatas;

$data = array(
	"name" => $_POST['name'],
	"age" => $_POST['age']
);

$result = $collection->insert($data);

if ($result) {
  echo "Insert success";
} else {
  echo "Insert failed";
}
?>
