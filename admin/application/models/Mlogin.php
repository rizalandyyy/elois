<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mlogin extends CI_Model {

	public function cek_login($table,$where)
	{
		return $this->db->get_where($table,$where);
	}

	public function validate($username,$password)
	{
		$this->db->where('username',$username);
		$this->db->where('password',$password);
		$result = $this->db->get('tb_admin');
		return $result;
	}

}