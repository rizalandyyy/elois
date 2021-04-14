<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Bali extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Bali');
		$this->load->view('Footer');
	}

	public function icha()
	{
		$this->load->view('Header');
		$this->load->view('B_icha');
		$this->load->view('Footer');
	}
}
