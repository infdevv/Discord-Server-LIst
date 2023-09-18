
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Fetch server list contents from the PHP script
    fetch("servers.php")
        .then((response) => response.text())
        .then((serverList) => {
            // Split the server list by '|/|' to get individual servers
            const servers = serverList.split("|/|");

            // Get the main div to append server divs
            const mainDiv = document.getElementById("main");

            // Loop through the servers and create server divs
            servers.forEach((server, index) => {
                // Split each server's details by newline
                const [name, description] = server.split("\n");

                // Create a server div
                const serverDiv = document.createElement("div");
                serverDiv.className = "server-div";

                // Set server div content and style
                serverDiv.innerHTML = `
                    <h2>${name}</h2>
                    <hr>
                    <p>${description}</p>
                `;

                // Append the server div to the main div
                mainDiv.appendChild(serverDiv);
            });

            // Hide the loading screen after content is loaded
            document.body.classList.remove("loading");
        })
        .catch((error) => {
            console.error("Error fetching server list:", error);
        });
});
