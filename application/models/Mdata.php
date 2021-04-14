<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mdata extends CI_Model {

    function save_data_hm($data){
		$this->db->insert('tb_hotmessage',$data);
	}

	function save_data_bs($data){
		$this->db->insert('tb_formbs',$data);
	}

	function save_data_feedback($data){
		$this->db->insert('tb_feedback',$data);
	}

	function get_all_post(){
		$hsl=$this->db->query("SELECT * FROM tb_blog ORDER BY id_blog DESC");
		return $hsl;
	}

	function get_post_by_slug($slug){
		$hsl=$this->db->query("SELECT * FROM tb_blog WHERE slug='$slug'");
		return $hsl;
	}

    function gethk($limit, $start){
        $this->db->order_by("id_blog", "desc");
        $query = $this->db->get('tb_blog', $limit, $start);
        return $query;
    }

}