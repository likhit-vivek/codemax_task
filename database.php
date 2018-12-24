<?php

class Database 
{	
	private $host = "localhost";
	private $user = "root";
	private $pwd = "";
	private $db_name = "codemax_assignment";
	public $conn;
	
	public function __construct()
	{
		if(!isset($this->conn)) {
			$this->conn = new mysqli($this->host, $this->user, $this->pwd, $this->db_name);
		}
	}
	
	public function executeQuery($query) {
		return $this->conn->query($query);
	}
}

?>