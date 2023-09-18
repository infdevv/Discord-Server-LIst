<?php
if (file_exists('servers.txt')) {
    $contents = file_get_contents('servers.txt');
    echo $contents;
} else {
    echo 'The servers.txt file does not exist.';
}
?>
