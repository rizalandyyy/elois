<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Detail_portofolio extends CI_Controller
{

    public function index()
    {
        $this->load->view('Header');
        $this->load->view('Detail_portofolio');
        $this->load->view('Footer');
    }
}