<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Contact');
		$this->load->view('Footer');
	}
}
