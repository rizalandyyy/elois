<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Vendor extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Vendor');
		$this->load->view('Footer');
	}
}
