<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Panel extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->logged_in();
        $this->load->library('form_validation');
        $this->load->model('mlogin');
        $this->load->model('mdata');
        $this->load->library('pagination');
        $this->load->library('upload');
    }

    private function logged_in()
    {
        if (!$this->session->userdata('logged_in')) {
            redirect('clogin');
        }
    }

    public function index()
    {
        $this->load->view('header');

        // $data['htmessage'] = $this->mdata->tampildataemailwa()->result_array();
        $data['htmessagec'] = $this->mdata->tampildataemailwa_c()->result_array();
        $data['htmessagecdeal'] = $this->mdata->tampildataemailwa_c_deal()->result_array();
        $data['htmessagecnodeal'] = $this->mdata->tampildataemailwa_c_nodeal()->result_array();
        $data['count'] = $this->mdata->getcount();
        $data['countc'] = $this->mdata->getcount_c();
        $data['countcdeal'] = $this->mdata->getcount_c_deal();
        $data['countcnodeal'] = $this->mdata->getcount_c_nodeal();

        //konfigurasi pagination
        $config['base_url'] = site_url('panel/index'); //site url
        $config['total_rows'] = $this->db->where('status', 1)->from("tb_hotmessage")->count_all_results(); //total row
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
        $config['num_tag_open']     = '<li class="page-item"><span class="page-link">';
        $config['num_tag_close']    = '</span></li>';
        $config['cur_tag_open']     = '<li class="page-item active"><span class="page-link">';
        $config['cur_tag_close']    = '<span class="sr-only">(current)</span></span></li>';
        $config['next_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['next_tagl_close']  = '<span aria-hidden="true">&raquo;</span></span></li>';
        $config['prev_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['prev_tagl_close']  = '</span>Next</li>';
        $config['first_tag_open']   = '<li class="page-item"><span class="page-link">';
        $config['first_tagl_close'] = '</span></li>';
        $config['last_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['last_tagl_close']  = '</span></li>';

        $this->pagination->initialize($config);
        $data['page'] = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;

        //panggil function get_mahasiswa_list yang ada pada mmodel mahasiswa_model.
        $data['data'] = $this->mdata->gethk($config["per_page"], $data['page']);

        $data['pagination'] = $this->pagination->create_links();

        $this->load->view('dashboard', $data);
        $this->load->view('footer');
    }

    function asset()
    {
        $this->load->view('header');
        $this->load->view('Asset');
        $this->load->view('footer');
    }

    function user()
    {
        $this->load->view('header');
        $data['admin'] = $this->mdata->tampildataadmin()->result_array();
        $this->load->view('user', $data);
        $this->load->view('footer');
    }

    function klien()
    {
        $this->load->view('header');

        //konfigurasi pagination
        $config['base_url'] = site_url('panel/klien'); //site url
        $config['total_rows'] = $this->db->where('status', 0)->from("tb_feedback")->count_all_results(); //total row
        $config['per_page'] = 10;  //show record per halaman
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
        $config['num_tag_open']     = '<li class="page-item"><span class="page-link">';
        $config['num_tag_close']    = '</span></li>';
        $config['cur_tag_open']     = '<li class="page-item active"><span class="page-link">';
        $config['cur_tag_close']    = '<span class="sr-only">(current)</span></span></li>';
        $config['next_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['next_tagl_close']  = '<span aria-hidden="true">&raquo;</span></span></li>';
        $config['prev_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['prev_tagl_close']  = '</span>Next</li>';
        $config['first_tag_open']   = '<li class="page-item"><span class="page-link">';
        $config['first_tagl_close'] = '</span></li>';
        $config['last_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['last_tagl_close']  = '</span></li>';

        $this->pagination->initialize($config);
        $data['page'] = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;

        //panggil function get_mahasiswa_list yang ada pada mmodel mahasiswa_model.
        $data['data'] = $this->mdata->gethkk($config["per_page"], $data['page']);

        $data['pagination'] = $this->pagination->create_links();

        $this->load->view('tables', $data);
        $this->load->view('footer');
    }

    function bridestory()
    {
        $this->load->view('header');

        //konfigurasi pagination
        $config['base_url'] = site_url('panel/bridestory'); //site url
        $config['total_rows'] = $this->db->count_all('tb_formbs'); //total row
        $config['per_page'] = 10;  //show record per halaman
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
        $config['num_tag_open']     = '<li class="page-item"><span class="page-link">';
        $config['num_tag_close']    = '</span></li>';
        $config['cur_tag_open']     = '<li class="page-item active"><span class="page-link">';
        $config['cur_tag_close']    = '<span class="sr-only">(current)</span></span></li>';
        $config['next_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['next_tagl_close']  = '<span aria-hidden="true">&raquo;</span></span></li>';
        $config['prev_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['prev_tagl_close']  = '</span>Next</li>';
        $config['first_tag_open']   = '<li class="page-item"><span class="page-link">';
        $config['first_tagl_close'] = '</span></li>';
        $config['last_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['last_tagl_close']  = '</span></li>';

        $this->pagination->initialize($config);
        $data['page'] = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;

        //panggil function get_mahasiswa_list yang ada pada mmodel mahasiswa_model.
        $data['data'] = $this->mdata->getbs($config["per_page"], $data['page']);

        $data['pagination'] = $this->pagination->create_links();

        $this->load->view('tablesbs', $data);
        $this->load->view('footer');
    }

    function blog()
    {
        $this->load->view('header');
        $this->load->view('blog');
        $this->load->view('footer');
    }

    function simpan_post()
    {
        $config['upload_path'] = './assets/images/news/'; //path folder
        $config['allowed_types'] = '*'; //type yang dapat diakses bisa anda sesuaikan
        $config['encrypt_name'] = TRUE; //enkripsi nama file ketika di upload

        $this->upload->initialize($config);
        if (!empty($_FILES['filefoto']['name'])) {
            if ($this->upload->do_upload('filefoto')) {
                $gbr = $this->upload->data();
                //Compress Image
                $config['image_library'] = 'gd2';
                $config['source_image'] = './assets/images/news/' . $gbr['file_name'];
                $config['create_thumb'] = FALSE;
                $config['maintain_ratio'] = FALSE;
                $config['quality'] = '100%';
                $config['new_image'] = './assets/images/news/' . $gbr['file_name'];
                $this->load->library('image_lib', $config);
                $this->image_lib->resize();

                $gambar = $gbr['file_name']; //ambil nama file yang terupload enkripsi
                $judul = $this->input->post('judul');
                $tanggal = $this->input->post('tanggal');
                $isi = $this->input->post('deskripsi');
                $meta = $this->input->post('meta');

                //Buat slug
                $string = preg_replace('/[^a-zA-Z0-9 \&%|{.}=,?!*()"-_+$@;<>\']/', '', $judul); //filter karakter unik dan replace dengan kosong ('')
                $trim = trim($string); // hilangkan spasi berlebihan dengan fungsi trim
                $pre_slug = strtolower(str_replace(" ", "-", $trim)); // hilangkan spasi, kemudian ganti spasi dengan tanda strip (-)
                $slug = $pre_slug . '.html'; // tambahkan ektensi .html pada slug

                $this->mdata->simpan_post($judul, $isi, $gambar, $tanggal, $slug, $meta); //simpan artikel ke database
                redirect('panel/blog');
            } else {
                //redirect ke blog jika gambar gagal upload
                redirect('panel/blog');
            }
        } else {
            //redirect ke blog jika gambar kosong
            redirect('panel/blog');
        }
    }

    function iblog()
    {
        $this->load->view('header');

        //konfigurasi pagination
        $config['base_url'] = site_url('panel/iblog'); //site url
        $config['total_rows'] = $this->db->count_all('tb_gallery'); //total row
        $config['per_page'] = 10;  //show record per halaman
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
        $config['num_tag_open']     = '<li class="page-item"><span class="page-link">';
        $config['num_tag_close']    = '</span></li>';
        $config['cur_tag_open']     = '<li class="page-item active"><span class="page-link">';
        $config['cur_tag_close']    = '<span class="sr-only">(current)</span></span></li>';
        $config['next_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['next_tagl_close']  = '<span aria-hidden="true">&raquo;</span></span></li>';
        $config['prev_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['prev_tagl_close']  = '</span>Next</li>';
        $config['first_tag_open']   = '<li class="page-item"><span class="page-link">';
        $config['first_tagl_close'] = '</span></li>';
        $config['last_tag_open']    = '<li class="page-item"><span class="page-link">';
        $config['last_tagl_close']  = '</span></li>';

        $this->pagination->initialize($config);
        $data['page'] = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;

        //panggil function get_mahasiswa_list yang ada pada mmodel mahasiswa_model.
        $data['data'] = $this->mdata->getgal($config["per_page"], $data['page']);

        $data['pagination'] = $this->pagination->create_links();

        $this->load->view('iblog', $data);
        $this->load->view('footer');
    }

    function uploadgam()
    {
        $config['upload_path'] = './assets/images/news/'; //path folder
        $config['allowed_types'] = '*'; //type yang dapat diakses bisa anda sesuaikan

        $this->upload->initialize($config);
        if (!empty($_FILES['filefoto']['name'])) {
            if ($this->upload->do_upload('filefoto')) {
                $gbr = $this->upload->data();
                //Compress Image
                $config['image_library'] = 'gd2';
                $config['source_image'] = './assets/images/news/' . $gbr['file_name'];
                $config['create_thumb'] = FALSE;
                $config['maintain_ratio'] = FALSE;
                $config['quality'] = '100%';

                $this->load->library('image_lib', $config);
                $this->image_lib->resize();

                $gambar = $gbr['file_name']; //ambil nama file yang terupload enkripsi
                $nama = $this->input->post('namagam');

                $this->mdata->simpan_gam($gambar, $nama); //simpan artikel ke database
                redirect('panel/iblog');
            } else {
                //redirect ke blog jika gambar gagal upload
                redirect('panel/iblog');
            }
        } else {
            //redirect ke blog jika gambar kosong
            redirect('panel/iblog');
        }
    }

    function logout()
    {
        $this->session->sess_destroy();
        redirect('clogin');
    }

    function updateew()
    {
        $d1 = $this->input->post('id');
        $d2 = $this->input->post('emailwa');
        $d3 = $this->input->post('status');

        $data = array(
            'emailwa' => $d2,
            'status' => $d3
        );

        $where = array(
            'idh' => $d1
        );

        $this->mdata->update_data_message($where, $data, 'tb_hotmessage');
        redirect('panel');
    }

    function updatequotationdeal()
    {
        $d1 = $this->input->post('id');
        $d3 = $this->input->post('status');

        $data = array(
            'status' => $d3
        );

        $where = array(
            'idh' => $d1
        );

        $this->mdata->update_data_message($where, $data, 'tb_hotmessage');
        redirect('panel');
    }

    function updatequotationnodeal()
    {
        $d1 = $this->input->post('id');
        $d3 = $this->input->post('status');

        $data = array(
            'status' => $d3
        );

        $where = array(
            'idh' => $d1
        );

        $this->mdata->update_data_message($where, $data, 'tb_hotmessage');
        redirect('panel');
    }


    function updatetab()
    {
        $d1 = $this->input->post('id');
        $d2 = $this->input->post('status');

        $data = array(
            'status' => $d2,

        );

        $where = array(
            'id_feedback' => $d1
        );

        $this->mdata->update_data_message($where, $data, 'tb_feedback');
        redirect('panel/klien');
    }
}