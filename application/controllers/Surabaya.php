<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Surabaya extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Surabaya');
		$this->load->view('Footer');
	}

	public function tikahendri()
	{
		$this->load->view('Header');
		$this->load->view('S_th');
		$this->load->view('Footer');
	}

	public function gladisandri()
	{
		$this->load->view('Header');
		$this->load->view('S_ga');
		$this->load->view('Footer');
	}

	public function evydedy()
	{
		$this->load->view('Header');
		$this->load->view('S_ed');
		$this->load->view('Footer');
	}
}
