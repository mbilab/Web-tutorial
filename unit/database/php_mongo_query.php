<?php
$config = include('config.php');

$url = "mongodb://{$config['mongo']['user']}:{$config['mongo']['password']}@localhost/wp2017_ta";
$mongoClient = new MongoClient($url);
$db = $mongoClient->$config['mongo']['dbname'];

$collection = $db->agedatas;

$query = array(
	"name" => $_POST['name']
);

$result = $collection->findOne($query);

if ($result) {
  echo $result["name"]." your age is ".$result["age"];
} else {
  echo "Query failed";
}
?>
