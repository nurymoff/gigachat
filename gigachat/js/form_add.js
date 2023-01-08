/*
Script that uses AJAX to send data to the server using a HTTP POST request when form is submitted.
The sent message gets erased, the name stays the same.
Original source of the script: https://api.jquery.com/jquery.post/
Used and modified by: Allan Nurymov
*/

$(function () {
  $('form').on('submit', function (e) {
    var dataString = $('form').serialize();
    var name_value = $('form').find("input[name='name']").val();
    var message_value = $('form').find("textarea[name='message']").val();

    if (name_value.trim() == "" || message_value.trim() == "") {
      document.getElementById("username").value = "";
      document.getElementById("message").value = "";
      document.getElementById("chars_left_username").innerHTML = "16";
      document.getElementById("chars_left_message").innerHTML = "512";

      Swal.fire({
        icon: 'error',
        title: 'Hey!',
        text: "Don't use empty names/messages!"
      })
    }
    else {
      document.getElementById("message").value = "";
      document.getElementById("chars_left_message").innerHTML = "512";
      $.ajax({
        type: 'POST',
        url: 'submit.php',
        data: dataString
      });

      Swal.fire({
        icon: 'success',
        title: 'Sucess!',
        text: "Your message was successfully added!"
      })
    }

    e.preventDefault();
  });
});