<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Event extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Event');
		$this->load->view('Footer');
	}
}
