<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Faq extends CI_Controller
{

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Faq');
		$this->load->view('Footer');
	}
}