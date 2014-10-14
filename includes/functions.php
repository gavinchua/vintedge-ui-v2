<?php
require_once "db/medoo.min.php";

/*
 * ERROR DEBUG
 */
error_reporting ( E_ALL ^ E_NOTICE );
ini_set ( "display_errors" , 1 );


/*
 * START SESSION
 */
session_start();

/*
 * TIMEZONE
 */
date_default_timezone_set('Asia/Singapore');

/*
 * FEEDBACK FIELDS ARRAY
 */
function requiredFeedbackFields() {
	$requiredFeedbackFields = array(
		"type",
		"name",
		"contactnumber",
		"email",
		"number",
		"comments"
	);
	return $requiredFeedbackFields;
}


/*
 * INSERT FEEDBACK
 */
/*$database->insert('ph_feedback', [
  'user_name' => 'foo'
  'email' => 'foo@bar.com',
  'age' => 25,
  'lang' => ['en', 'fr', 'jp', 'cn']
]);*/
$database = new medoo();


/*
 * SELECTED
 */
function selected_default($value,$default) {
	if ($value == $default) {
		$selected = "selected";
		return $selected;
	}
	return false;
}


/*
 * PAGE URL
 */
function getFilename(){
	$filename = explode("/", curPageURL());
	$filename = array_reverse($filename);
	return $filename[0];
}


/*
 * CUR PAGE URL
 */
function curPageURL(){
	$pageURL = 'http';
	if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
	$pageURL .= "://";
	if ($_SERVER["SERVER_PORT"] != "80") {
		$pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
	} else {
		$pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
	}
	return $pageURL;
}


/*
 * CLIENT IP
 */
function getIP() {
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
		$ip = $_SERVER['HTTP_CLIENT_IP'];
	} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
	} else {
		$ip = $_SERVER['REMOTE_ADDR'];
	}
	return $ip;
}


/*
 * SEND HTML MAIL
 */
function sendMail($to, $cc, $from, $from_name, $subject, $htmlBody, $textBody) {
	require_once("mailer/PHPMailerAutoload.php");
	
	$mail = new PHPMailer();
	
	/*$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
	//$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'gavin@vintedge.com';                 // SMTP username
	$mail->Password = '';                           // SMTP password
	//$mail->SMTPSecure = 'tls';*/
	
	$mail->isSMTP();
	$mail->Host = '10.10.10.10';
	
	$mail->From = $from;
	$mail->FromName = $from_name;
	$mail->AddAddress($to);
	$mail->AddCC($cc);
	//$mail->AddBCC($bcc);
	
	$mail->WordWrap = 50;
	$mail->IsHTML(true);
	
	$mail->Subject = $subject;
	$mail->Body = $htmlBody;
	$mail->AltBody = $textBody;
	
	if(!$mail->send()) {
		//echo 'Message could not be sent.';
		//echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		//echo 'Message has been sent';
	}
}


/*
 * DEBUG STATEMENT
 */
function debug ( $var = false ) {
  echo "\n<pre style=\"background: #ff9; font-size: 10px; position: relative; z-index: 10;\">\n";

  $var = print_r( $var , true );
  echo $var . "\n</pre>\n";
}
?>