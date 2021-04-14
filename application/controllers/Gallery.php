<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gallery extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Gallery');
		$this->load->view('Footer');
	}
}
