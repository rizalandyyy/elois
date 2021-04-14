<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mdata extends CI_Model {

    function tampildataemailwa()
    {
        $this->db->where('status', 1);
        return $this->db->get('tb_hotmessage');
    }

    function tampildataemailwa_c()
    {
        $this->db->order_by("idh", "desc");
        $this->db->limit(20);
        $this->db->where('status', 2);
        return $this->db->get('tb_hotmessage');
    }

    function tampildataemailwa_c_deal()
    {
        $this->db->order_by("idh", "desc");
        $this->db->limit(20);
        $this->db->where('status', 3);
        return $this->db->get('tb_hotmessage');
    }

    function tampildataemailwa_c_nodeal()
    {
        $this->db->order_by("idh", "desc");
        $this->db->limit(20);
        $this->db->where('status', 4);
        return $this->db->get('tb_hotmessage');
    }

    function tampildataadmin()
    {
        return $this->db->get('tb_admin');
    }

    function tampildatafeedback()
    {
        return $this->db->get('tb_feedback');
    }

    function getcount()
    {
        $sql = "SELECT count(idh) as idh from tb_hotmessage where status = 1 ";
        $result = $this->db->query($sql);
        return $result->row()->idh;
    }

    function getcount_c()
    {
        $sql = "SELECT count(idh) as idh from tb_hotmessage where status = 2 ";
        $result = $this->db->query($sql);
        return $result->row()->idh;
    }

    function getcount_c_deal()
    {
        $sql = "SELECT count(idh) as idh from tb_hotmessage where status = 3 ";
        $result = $this->db->query($sql);
        return $result->row()->idh;
    }

    function getcount_c_nodeal()
    {
        $sql = "SELECT count(idh) as idh from tb_hotmessage where status = 4 ";
        $result = $this->db->query($sql);
        return $result->row()->idh;
    }

    function simpan_post($judul,$isi,$gambar,$tanggal,$slug,$meta){
		$hsl=$this->db->query("INSERT INTO tb_blog (judul,isi,gambar,tanggal,slug,meta) VALUES ('$judul','$isi','$gambar','$tanggal','$slug','$meta')");
		return $hsl;
    }

    function simpan_gam($gambar,$nama){
		$hsl=$this->db->query("INSERT INTO tb_gallery (gambar,nama) VALUES ('$gambar','$nama')");
		return $hsl;
    }

    function update_data_message($where,$data,$table){
		$this->db->where($where);
		$this->db->update($table,$data);
    }

    function gethk($limit, $start){
        $this->db->order_by("idh", "desc");
        $this->db->where("status", 1);
        $query = $this->db->get('tb_hotmessage', $limit, $start);
        return $query;
    }

    function gethkk($limit, $start){
        $this->db->order_by("id_feedback", "desc");
        $this->db->where("status", 0);
        $query = $this->db->get('tb_feedback', $limit, $start);
        return $query;
    }

    function getbs($limit, $start){
        $this->db->order_by("id_form", "desc");
        $query = $this->db->get('tb_formbs', $limit, $start);
        return $query;
    }

    function getgal($limit, $start){
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tb_gallery', $limit, $start);
        return $query;
    }

}