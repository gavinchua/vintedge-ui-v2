<?php
require_once "db/medoo.min.php";
/*
 * http://medoo.in/doc
 */



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
 * INITIALIZE MED0O
 */
$database = new medoo();
/*$database = new medoo([
// required
'database_type' => 'mysql',
'database_name' => 'name',
'server' => 'localhost',
'username' => 'your_username',
'password' => 'your_password',
 
// optional
'port' => 3306,
'charset' => 'utf8',
// driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
'option' => [
PDO::ATTR_CASE => PDO::CASE_NATURAL
]
]);
 
$database->insert("account", [
"user_name" => "foo",
"email" => "foo@bar.com"
]);*/


/*
 * FIELD RADIO SELECTED
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
	
	$mail->isSMTP();
	$mail->Host = 'localhost';
	
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