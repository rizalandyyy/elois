<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Form extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Form');
		$this->load->view('Footer');
	}
}
