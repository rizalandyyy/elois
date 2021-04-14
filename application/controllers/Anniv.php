<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Anniv extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Anniv');
		$this->load->view('Footer');
	}
}
