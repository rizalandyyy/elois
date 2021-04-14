<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller {

  public function __construct()
	{
    parent::__construct();
	$this->load->library('form_validation');
  $this->load->model('mdata');
  $this->load->library('pagination');
  }

	  public function index()
	  {
      $this->load->view('Header');

    // $x['data']=$this->mdata->get_all_post();

        $config['base_url'] = site_url('blog/index'); //site url
        $config['total_rows'] = $this->db->count_all('tb_blog'); //total row
        $config['per_page'] = 5;  //show record per halaman
        $config["uri_segment"] = 3;  // uri parameter
        $choice = $config["total_rows"] / $config["per_page"];
        $config["num_links"] = floor($choice);

        // Membuat Style pagination untuk BootStrap v4
        $config['first_link']       = 'First';
        $config['last_link']        = 'Last';
        $config['next_link']        = 'Next';
        $config['prev_link']        = 'Prev';
        $config['full_tag_open']    = '<div class="pagging text-center"><nav><ul class="pagination justify-content-center">';
        $config['full_tag_close']   = '</ul></nav></div>';
        $config['num_tag_open']     = '<li class="page-item" style="padding:0 8px"><span class="page-link">';
        $config['num_tag_close']    = '</span></li>';
        $config['cur_tag_open']     = '<li class="page-item style="padding:0 8px" active"><span class="page-link">';
        $config['cur_tag_close']    = '<span class="sr-only">(current)</span></span></li>';
        $config['next_tag_open']    = '<li class="page-item style="padding:0 8px""><span class="page-link">';
        $config['next_tagl_close']  = '<span aria-hidden="true">&raquo;</span></span></li>';
        $config['prev_tag_open']    = '<li class="page-item style="padding:0 8px""><span class="page-link">';
        $config['prev_tagl_close']  = '</span>Next</li>';
        $config['first_tag_open']   = '<li class="page-item style="padding:0 8px""><span class="page-link">';
        $config['first_tagl_close'] = '</span></li>';
        $config['last_tag_open']    = '<li class="page-item style="padding:0 8px""><span class="page-link">';
        $config['last_tagl_close']  = '</span></li>';

        $this->pagination->initialize($config);
        $data['page'] = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;

        //panggil function get_mahasiswa_list yang ada pada mmodel mahasiswa_model.
        $data['data'] = $this->mdata->gethk($config["per_page"], $data['page']);

        $data['pagination'] = $this->pagination->create_links();

    $this->load->view('Blog',$data);
		$this->load->view('Footer');
    }

    function detail($slug){ //fungsi untuk menampilkan detail artikel
      $data=$this->mdata->get_post_by_slug($slug);
      if($data->num_rows() > 0){ // validasi jika data ditemukan
        $x['data']= $data;
        $this->load->view('Header');
        $this->load->view('detail_blog',$x);
        $this->load->view('Footer');
      }else{
        //jika data tidak ditemukan, maka kembali ke blog
        redirect('blog');
      }

    }

    function blog1()
    {
        $this->load->view('Header');
		$this->load->view('Blog1');
		$this->load->view('Footer');
    }

    function blog2()
    {
        $this->load->view('Header');
		$this->load->view('Blog2');
		$this->load->view('Footer');
    }

    function blog3()
    {
        $this->load->view('Header');
		$this->load->view('Blog3');
		$this->load->view('Footer');
    }

    function blog4()
    {
        $this->load->view('Header');
		$this->load->view('Blog4');
		$this->load->view('Footer');
    }

    function blog5()
    {
        $this->load->view('Header');
		$this->load->view('Blog5');
		$this->load->view('Footer');
    }

    function blog6()
    {
        $this->load->view('Header');
		$this->load->view('Blog6');
		$this->load->view('Footer');
    }

}
