<?php
include('database.php');
header("Access-Control-Allow-Origin: *");      
	header("Access-Control-Allow-Headers:
 {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");


$sth = mysqli_query($conn,"SELECT * from user");
$rows = array();
//print_r($rows);
while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}
print json_encode($rows);

?>