<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Clogin extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->library('form_validation');
		$this->load->model('mlogin');
	}

	private function logged_in()
    {
        if( ! $this->session->userdata('logged_in')){
            redirect('clogin');
        }
    }

	public function index()
	{
		$this->load->view('index');
	}

	function loginproses()
    {
		$username = $this->input->post('username', TRUE);
		$password = $this->input->post('pass', TRUE);
		$validate = $this->mlogin->validate($username,$password);

		if($validate->num_rows() > 0){
        $data  = $validate->row_array();
        $nama = $data['username'];

        $sesdata = array(
            'username'  => $nama,
            'logged_in' => TRUE
        );

        $this->session->set_userdata($sesdata);

        redirect('panel');
    }
    else
        {
            echo $this->session->set_flashdata('msg','Username or Password is Wrong');
            redirect('clogin');
        }
    }
}
