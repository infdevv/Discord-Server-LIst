<?php
// Check if the servers.txt file exists
if (file_exists('servers.txt')) {
    // Read the contents of the servers.txt file
    $contents = file_get_contents('servers.txt');
    
    // Output the contents of the file
    echo $contents;
} else {
    // If the file doesn't exist, return an error message
    echo 'The servers.txt file does not exist.';
}
?>
