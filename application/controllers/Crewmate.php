<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Crewmate extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Crewmate');
		$this->load->view('Footer');
	}
}
