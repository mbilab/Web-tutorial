<?php
$text = $_POST["text"];
if ($text) {
    $text = htmlspecialchars($text);
    $text .= "<br>";
    file_put_contents("chat.txt", $text, FILE_APPEND);
    echo file_get_contents("chat.txt");
} else {
    echo file_get_contents("chat.txt");
}
?>
