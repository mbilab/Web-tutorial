<?php
$text = $_POST["text"];
if ($text) {
  # important for security issue
  # try to disable this line to see the difference
  # but remeber to enable this again
  $text = htmlspecialchars($text);

  $text .= "<br>";

  # use database once you are able to
  file_put_contents("chat.txt", $text, FILE_APPEND);
}

# create `chat.txt` with proper privilege
# use database once you are able to
echo file_get_contents("chat.txt");
?>
