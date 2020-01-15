import ApiService from "./ApiService";
import {BASE_URL} from "../Config";
import axios from 'axios';

export default class AuthService extends ApiService {
    constructor(props) {
        super(props);
        this.baseUrl = BASE_URL;
    }
    Login(email, password){
        return axios.post(`${this.baseUrl}login`,  {password:password, email:email});        
    }
    LogOut(){
        localStorage.removeItem("admin");
                
    }
    CheckForUser(){
        return localStorage.getItem("admin");
    }
}