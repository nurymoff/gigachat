/*
Script that refreshes the entries.php section of the website every second so that changes
(new entries) can be seen for other tabs/windows/users without having to refresh the page.
Original source of the script: https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp
Used and modified by: Allan Nurymov
*/

function refresh() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("entries").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("POST", "entries.php", true);
    xmlhttp.send();
}

window.setInterval(refresh, 1000); 