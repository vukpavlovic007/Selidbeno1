function sendEmail() {
   var name = $(".name_input");
   var email = $(".email_input");
   var body = $(".message_input");
   var title = $(".title_input");

   if(isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(body) && isNotEmpty(title)) {
      $.ajax({
         url:'mail.php',
         method: 'POST',
         dataType: 'json',
         data: {
            name: name.val(),
            email: email.val(),
            title: title.val(),
            body: body.val()
         }, success: function (response) {
            console.log(response);
         }
      });
   }
}  

function isNotEmpty(caller) {
   if(caller.val() == "") {
      caller.css('border', '1px solid red');
      return false;
   } else {
      caller.css('border', '');
      return true;
   }
}