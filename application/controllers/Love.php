<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Love extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Love');
		$this->load->view('Footer');
	}
}
