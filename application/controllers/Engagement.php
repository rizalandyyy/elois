<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Engagement extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Engagement');
		$this->load->view('Footer');
	}
}
