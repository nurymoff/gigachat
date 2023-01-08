<?php
/*
Script that returns the array of entries from json file, reverses them and starts displaying them
one by one as divs. If no entries exist yet, returns a simple message.
Original source of the script: Allan Nurymov
*/

$entries = json_decode(file_get_contents("js/entries.json"), true);
if (isset($entries) && count($entries) != 0) {
    foreach (array_reverse($entries) as $entry) {
        ?>
        <div class="entry">
            <div class="user-img"> <img src="img/gigachad.jpg" alt="gigachad profile picture"></div>
            <div class="content">
                <div class="user-info">
                    <div class="name">
                        <?php echo $entry['name']; ?>
                    </div>
                    <div class="datetime"> <?php echo $entry['datetime']; ?> </div>
                </div>
                <div class="message">
                    <?php echo $entry['message']; ?>
                </div>
            </div>
        </div>
        <?php
    }
} else {
    echo "<center><p> be the first gigachad to gigachat. </p><center>";
}
?>