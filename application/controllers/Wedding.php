<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Wedding extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Wedding');
		$this->load->view('Footer');
	}
}
