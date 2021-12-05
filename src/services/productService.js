import axios from "axios";

export default class ProductService{
getProducts(){
    return axios.get("http://localhost:10000/api/products/getall")
}
getByIdProduct(id){
    return axios.get("http://localhost:10000/api/products/getbyidProduct/"+id)
}
getSession(){
    return axios.get("http://localhost:10000/api/auth/session")
}
}