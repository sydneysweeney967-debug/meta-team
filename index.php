<?php

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

file_put_contents("log.txt", $raw . PHP_EOL, FILE_APPEND);

if (!$data) {
    echo "OK";
    exit;
}

$from = $data['form'] ?? '';
$to = $data['to'] ?? '';
$msg = $data['chat'] ?? '';

file_put_contents("log.txt", "FROM:$from | TO:$to | MSG:$msg\n", FILE_APPEND);

echo "OK";
