<?php
defined('BASEPATH') OR exit('No direct script access allowed');
   class Users_model extends CI_Model{
 
    public function login($account,$password){
         $sql = "select * from t_user where u_account='$account' and u_password='$password'";
         $query = $this->db->query($sql);
         return $query->row();
//           return $this->db->query(from('t_user')->where('u_account',$account)->where('u_password',$password)->get()->row());
        }
    public function insert_user($email,$pass,$username,$catlog){
         $sql="insert into t_user(u_account,u_password,u_name,c_id) values('$email','$pass','$username','$catlog')";
          $query=$this->db->query($sql);
          return $query;
    }
    public function search_photo(){
        $sql = "select * from t_camwrite";
        $query = $this->db->query($sql);
        return $query->result();
    }
    public function search_photoimg($aa){
        $sql = "select t_campic from t_camwrite,t_camimg where c_id = $aa";
        $query = $this->db->query($sql);
        return $query->result();
   }
}