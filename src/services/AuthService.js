import ApiService from "./ApiService";

export default class AuthService extends ApiService {
    Login(email, password){
        localStorage.setItem('admin', JSON.stringify(btoa(email)));
    }
}