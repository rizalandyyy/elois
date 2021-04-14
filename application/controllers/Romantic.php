<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Romantic extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Romantic');
		$this->load->view('Footer');
	}
}
