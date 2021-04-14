<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Marriage extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Marriage');
		$this->load->view('Footer');
	}
}
