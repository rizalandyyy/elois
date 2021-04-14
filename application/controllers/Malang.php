<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Malang extends CI_Controller {

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Malang');
		$this->load->view('Footer');
	}

	public function pricil()
	{
		$this->load->view('Header');
		$this->load->view('M_pricil');
		$this->load->view('Footer');
	}

	public function emma()
	{
		$this->load->view('Header');
		$this->load->view('M_emma');
		$this->load->view('Footer');
	}

	public function duta()
	{
		$this->load->view('Header');
		$this->load->view('M_duta');
		$this->load->view('Footer');
	}
}
