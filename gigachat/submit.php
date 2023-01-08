<?php
/*
Script that starts when form is submitted and POST data sent via form_add.js.
Takes the POST data (name, message) and filters them, adds current time and puts it all in an array.
Then it checks if the entry is the very first.
If so, adds "id" of 1 to the first entry and puts it into another array to save.
If not, takes the old entries from decoded entries.json file, checks the last entry and takes it's id,
adds new id to the new message and adds it all into the array to save.
Array then gets encoded and saved into entries.json.
Original source of the script: Allan Nurymov
*/

date_default_timezone_set('Europe/Prague');
$current_date_time = date('d.m.Y H:i:s', time());
$name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_SPECIAL_CHARS);


$new_message = array(
	"name" => $name,
	"message" => $message,
	"datetime" => $current_date_time
);

if (filesize("js/entries.json") == 0) {
	$new_message_id = array('id' => 1);
	$new_message = $new_message_id + $new_message;

	$first_record = array($new_message);
	$data_to_save = $first_record;
} else {
	$old_records = json_decode(file_get_contents("js/entries.json"), true);
	$last_record = end($old_records);
	$last_id = $last_record['id'];

	$new_message_id = array('id' => $last_id + 1);
	$new_message = $new_message_id + $new_message;

	array_push($old_records, $new_message);
	$data_to_save = $old_records;
}

file_put_contents("js/entries.json", json_encode($data_to_save, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);