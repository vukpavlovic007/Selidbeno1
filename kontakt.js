function sendEmail() {
   var name = $(".name_input");
   var email = $(".email_input");
   var body = $(".message_input");
   var title = $(".title_input");
   console.log("sending...");

   if(isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(body) && isNotEmpty(title)) {
      console.log("passed condition...");
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