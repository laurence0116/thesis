<?php
$name =$_POST['name'];
$age =$_POST['age'];
$gender = $_POST['gender'];


if ( !empty($gender)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "thesis";

		//create connection
		$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

		if ( $conn->connect_error ) {
			die("Connection failed." . $conn->connect_error);
		} else {
			$SELECT = "SELECT name FROM gender WHERE name='". $name . "'";
			$INSERT = "INSERT INTO gender ( name,age, gender) VALUES(?,?,	?)";

		//Prepare statement
		$stmt = $conn->query($SELECT);
		if ( $stmt->num_rows == 0 ) {

			$stmt = $conn->prepare($INSERT);
			$stmt->bind_param("sss", $name, $age, $gender);
			$stmt->execute();
			echo
				header("Location: menu.php");

		}	else{

			echo "Someone already register using this name";
		}
		$conn->close();
	}
} else {
echo "";
die();
}

?>