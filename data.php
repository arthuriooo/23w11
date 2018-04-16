<?php 

$dtz = new DateTimeZone("Europe/Moscow"); //Your timezone
$now = new DateTime(date("Y-m-d"), $dtz);
$date = $now->format("Y-m-d");
echo $date;

?>