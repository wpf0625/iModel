<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Users extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('users_model');
		header('Access-Control-Allow-Origin:*');  //支持全域名访问，不安全，部署后需要固定限制为客户端网址
        header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); //支持的http 动作
        header('Access-Control-Allow-Headers:x-requested-with,content-type');  //响应头 请按照自己需求添加。
	}
    public function login(){
        $account=$this->input->get('account');
        $password=$this->input->get('password');
        $result=$this->users_model->login($account,$password);
        echo json_encode($result);
    }
    public function insert_user(){
            $email=$this->input->get('email');
            $pass=$this->input->get('pass');
            $username = $this->input->get('username');
            $catlog = $this->input->get('catlog');
            $result=$this->users_model->insert_user($email,$pass,$username,$catlog);
            if($result){
                echo $result;
            }
            else{
                echo 'failed';
            }
    }

    //推荐
    public function recommend_mod(){
        $result = $this->users_model->recommend_mod();
        echo json_encode($result);
    }
    //自荐
    public function self_commend(){
        $result = $this->users_model->self_commend();
        for($i = 0;$i<count($result);$i++){
            $newresult = $this->users_model->self_commendimg($result[$i]->d_id);
            $result[$i]->imgs = $newresult;
        }
        echo json_encode($result);
    }




    //search_photo摄影
    public function search_photo(){
        $result=$this->users_model->search_photo();
        for($i = 0; $i<count($result);$i++){
            $newresult=$this->users_model->search_photoimg($result[$i]->cd_id);
            $result[$i]->imgs = $newresult;
        }
        echo json_encode($result);
    }


     public function search_bao(){
            $result=$this->users_model->search_bao();
//            for($i = 0; $i<count($result);$i++){
//                $newresult=$this->users_model->search_photoimg($result[$i]->cd_id);
//                $result[$i]->imgs = $newresult;
//            }
            echo json_encode($result);
        }

        public function insert_publish(){
                $content=$this->input->post('content');
                $result=$this->users_model->insert_publish($content);
                if($result){
                    echo $result;
                }
                else{
                    echo 'failed';
                }
        }
}


