<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class About extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('About');
		$this->load->view('Footer');
	}
}
