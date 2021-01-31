<?php

if(isset($_POST['submit'])) {
   $name = $_POST['name'];
   $title = $_POST['title'];
   $email = $_POST['email'];
   $message = $_POST['message'];

   $errorEmpty = false;
   $errorEmail = false;

   if(empty($name) || empty($email) || empty($message)) {
      echo "<span class='form-error'>Popunite sva polja!</span>";
      $errorEmpty = true;
   }
   elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "<span class='form-error'>Napisite pravilnu email adresu!</span>"
      $errorEmail = true;
   }
   else {
      echo "<span class='form-success'>Fill in all the fields!</span>"
   }
}
else {
   echo "Doslo je do greske!"
}

?>

<script>
   $(".name_input, .title_input, .email_input, .message_input").removeClass("input-error");

   var errorEmpty = "<?php echo $errorEmpty; ?>";
   var errorEmail = "<?php echo $errorEmail; ?>";

   if (errorEmpty == true) {
      $(".name_input, .title_input, .email_input, .message_input").addClass("input-error");
   }
   if (errorMail == true) {
      $(".email_input").addClass("input-error");
   }  
   if (errorEmpty == false && errorMail == false) {
      $(".name_input, .title_input, .email_input, .message_input").val("");
   }
</script>