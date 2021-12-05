import axios from "axios";

export default class AuthService{

    login(user){
        return axios.post("http://localhost:10000/api/login",user,{'Accept': 'application/json'})
    }

    }