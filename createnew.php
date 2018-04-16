<?php 

include ('./includes/classes/DB.php');

if (isset($_POST['create'])) {
	echo 'norm';

	$username = $_POST['username'];
	$password = $_POST['password'];

	echo $username;
	echo $password;

	DB::query('INSERT INTO users VALUES(\'\', :username, :password)', array(':username'=>$username, ':password'=>password_hash($password, PASSWORD_BCRYPT)));
}

?>

<h1>Enter details</h1>
<form action='./createnew.php' method='post'>
	<input type="text" name="username" placeholder="Username...">
	<input type="password" name="password" placeholder="Password...">
	<input type="submit" name="create" value='Create New'>
</form>