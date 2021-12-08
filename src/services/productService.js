import axios from "axios";

export default class ProductService{
getAllProducts(){
    return axios.get("http://localhost:10000/api/products/getall")
    }
getProducts(pageNumber){
    return axios.get("http://localhost:10000/api/products/getall-pagi?page="+pageNumber)
}
getByIdProduct(id){
    return axios.get("http://localhost:10000/api/products/getbyidProduct/"+id)
}
edit(product){
    return axios.put("http://localhost:10000/api/products/update",product,{'Accept': 'application/json'})
}
delete(id){
    return axios.delete("http://localhost:10000/api/products/delete/"+id,{'Accept': 'application/json'})
}
search(search){
    return axios.get("http://localhost:10000/api/products/search/"+search)
}
add(product){
    return axios.post("http://localhost:10000/api/products/add",product,{'Accept': 'application/json'})
}
}