<?php
   use PHPMailer\PHPMailer\PHPMailer;

   if (isset($_POST['name']) && isset($_POST['email'])) {
      $name = $_POST['name'];
      $email = $_POST['email'];
      $title = $_POST['title'];
      $body = $_POST['body'];

      require_once "PHPMailer.php";
      require_once "SMTP.php";
      require_once "Exception.php";

      $mail = new PHPMailer();

      $mail->isSMTP();
      $mail->Host = "smtp.gmail.com";
      $mail->SMTPAuth = true;
      $mail->Username = "root";
      $mail->Password = "";
      $mail->Port = 465;
      $mail->SMTPSecure = "ssl";

      $mail->isHTML(isHTML: true);
      $mail->setFrom($email, $name);
      $mail->addAddress(address:"vukpavlovic007@gmail.com")
      $mail->Subject = $title;
      $mail->Body = $body;

      if($mail->send()) {
         $response = "Email je poslat!";
      } else
         $response = "Doslo je do greske:  <br><br>" . $mail->ErrorInfo;

      exit(json_encode(array("response" => $response)));
   }
?>