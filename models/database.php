<?php

class Database 
{	
	private $cleardb_url;
	private $host;
	private $user;
	private $pwd;
	private $db_name;
	/*private $host = "localhost";
	private $user = "root";
	private $pwd = "";
	private $db_name = "codemax_assignment";*/
	public $conn;
	
	public function __construct()
	{
		$this->cleardb_url 	= parse_url(getenv("CLEARDB_DATABASE_URL"));
		$this->host 		= $this->cleardb_url['host'];
		$this->user 		= $this->cleardb_url['user'];
		$this->pwd 			= $this->cleardb_url['pass'];
		$this->db_name 		= substr($this->cleardb_url['path'],1);
		if(!isset($this->conn)) {
			$this->conn = new mysqli($this->host, $this->user, $this->pwd, $this->db_name);
		}
	}
	
	public function executeQuery($query) {
		return $this->conn->query($query);
	}
}

?>