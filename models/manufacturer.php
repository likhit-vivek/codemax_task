<?php 

require_once 'database.php';

/*** 
The code from line 10 to line 18 is used to call appropriate function as required.
Alternative solution: 
Use an intermediate php file which can act as a channel between the AJAX call and the class function below.
***/
$selfObject = new Manufacturer();

if($_SERVER['REQUEST_METHOD'] == 'POST') 
{
	$name = $_POST['name'];
	if($_POST['functionName'] == 'addManufacturer') echo $selfObject->addManufacturer($name);
} elseif($_SERVER['REQUEST_METHOD'] == 'GET') {
	echo $selfObject->getManufacturers();
}

class Manufacturer
{
	private $db;
	
	public function __construct() 
	{
		$this->db = new Database();
	}
	
	public function addManufacturer($name) 
	{
		if($name == "") {
			return json_encode(['success'=> false, 'msg'=> 'Please enter a name!']);
		}
		
		$query 	= "SELECT * FROM manufacturers WHERE name='$name'";
		$result = $this->db->executeQuery($query);
		
		if($result->num_rows > 0) {
			return json_encode(['success'=> false, 'msg'=> 'Manufacturer already exists!']);
		}
		
		$query 	= "INSERT INTO manufacturers (name) VALUES ('$name')";
		$result = $this->db->executeQuery($query);
		
		if($result) {
			return json_encode(['success'=> true, 'msg'=> 'success']);
		} else {
			return json_encode(['success'=> false, 'msg'=> 'Unable to add manufacturer. Try again.']);
		}
	}
	
	public function getManufacturers()
	{
		$query 	= "SELECT * FROM manufacturers";
		$result = $this->db->executeQuery($query);
		return json_encode($result->fetch_all(MYSQLI_ASSOC));
	}
}

?>