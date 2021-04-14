<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Schedule extends CI_Controller
{

    public function index()
    {
        $this->load->view('Header');
        $this->load->view('Schedule');
        $this->load->view('Footer');
    }
}