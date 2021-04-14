<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct()
	{
        parent::__construct();
		$this->load->library('form_validation');
		$this->load->model('mdata');
    }

	public function index()
	{
		$this->load->view('Header');
		$this->load->view('Index');
		$this->load->view('Footer');
	}

	public function bridestory()
	{
		$d1 = $this->input->post('jenis');
		$d2 = $this->input->post('nama');
		$d3 = $this->input->post('tempat');
		$d4 = $this->input->post('tanggal');
		$d5 = $this->input->post('jml');
		$d6 = $this->input->post('special');
		$d7 = $this->input->post('datenow');
		$data['jenis_event'] = $d1;
		$data['nama'] = $d2;
		$data['kota'] = $d3;
		$data['tanggal'] = $d4;
		$data['jumlah'] = $d5;
		$data['wishes'] = $d6;
		$data['datenow'] = $d7;
		$this->mdata->save_data_bs($data);
		redirect('home');
	}

	public function hm()
	{
		$d1 = $this->input->post('emailwa');
		$d2 = $this->input->post('status');
		$d3 = $this->input->post('waktu');
		$data['emailwa'] = $d1;
		$data['status'] = $d2;
		$data['waktu'] = $d3;
		$this->mdata->save_data_hm($data);
		redirect('home');
	}

	public function feedback()
	{
		$d1 = $this->input->post('nama');
		$d2 = $this->input->post('email');
		$d3 = $this->input->post('tanggal');
		$d4 = $this->input->post('message');
		$data['nama'] = $d1;
		$data['email'] = $d2;
		$data['tanggal'] = $d3;
		$data['pesan'] = $d4;
		$this->mdata->save_data_feedback($data);
		redirect('home');
	}
}
