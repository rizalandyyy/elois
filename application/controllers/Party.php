<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Party extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Party');
		$this->load->view('Footer');
	}
}
