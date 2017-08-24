<?php
defined('BASEPATH') OR exit('No direct script access allowed');
   class Users_model extends CI_Model{
        public function login($account,$password){
             $sql = "select * from t_user where u_account='$account' and u_password='$password'";
             $query = $this->db->query($sql);
             return $query->num_rows();
          return $this->db->query('t_user')->where('u_account',$account)->where('u_password',$password)->get()->row();
}


    public function insert_user($email,$pass,$username,$catlog){
         $sql="insert into t_user(u_account,u_password,u_name,c_id) values('$email','$pass','$username','$catlog')";
          $query=$this->db->query($sql);
          return $query;
    }
    //推荐
    public function recommend_mod(){
        $sql = "select * from t_model";
        $query = $this->db->query($sql);
        return $query->result();
    }
    //自荐
    public function self_commend(){
        $sql = "select * from t_doing";
        $query = $this->db->query($sql);
        return $query->result();
    }
    public function self_commendimg($aa){
        $sql = "select di_img from t_doingimg where d_id = $aa";
        $query = $this->db->query($sql);
        return $query->result();
    }

    //摄影
    public function search_photo(){
        $sql = "select * from t_camwrite";
        $query = $this->db->query($sql);
        return $query->result();
    }
    public function search_photoimg($aa){
        $sql = "select t_campic from t_camwrite,t_camimg where c_id = $aa";
        var_dump($aa);
        $query = $this->db->query($sql);
        return $query->result();
   }




   //
    public function search_bao(){
           $sql = "select * from t_bao";
           $query = $this->db->query($sql);
           return $query->result();
           var_dump($query);
       }



       public function insert_publish($content){
            $sql="insert into t_gao(g_text) values('$content')";
             $query=$this->db->query($sql);
             return $query;
             var_dump($query);

       }
}




?>
