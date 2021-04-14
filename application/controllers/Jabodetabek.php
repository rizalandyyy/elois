<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Jabodetabek extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Jabodetabek');
		$this->load->view('Footer');
	}

	public function ochi()
	{
		$this->load->view('Header');
		$this->load->view('J_ochi');
		$this->load->view('Footer');
	}

	public function manda()
	{
		$this->load->view('Header');
		$this->load->view('J_manda');
		$this->load->view('Footer');
	}
}
