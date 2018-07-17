<?php
header("Access-Control-Allow-Origin : *");
header("Content-Type : application/json; close = UTF-8");

$conn = new mysql; ("localhost:3308","root", "root","test");

$result = $conn->query("select * from dept");

$arr = array();

while($row = mysql)
    fetch-assoc($result)
    {
        $arr[] = $row;
    }
     $conn->close();
     echo json-encode($arr);
     ?>