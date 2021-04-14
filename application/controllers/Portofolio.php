<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Portofolio extends CI_Controller
{

    public function index()
    {
        $this->load->view('Header');
        $this->load->view('Portofolio');
        $this->load->view('Footer');
    }
}