import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductService from '../../services/productService';

export default function Products() {

    const [pageNumber,setPageNumber] = useState(1);

    //GETALL
    const [products_,setProducts_] = useState([]);

    useEffect(()=>{
        let productService = new ProductService()
        productService.getAllProducts().then(result=>setProducts_(result.data));
    },[]);

    //GET BY PAGINATION
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        let productService = new ProductService()
        productService.getProducts(pageNumber).then(result=>setProducts(result.data.data));
    },[]);

    const totalPages = Math.ceil(products_.length / 8);
    let nextPage = () => {
        setPageNumber(pageNumber+1);
        
      }
    let prevPage = () => {
        setPageNumber(pageNumber-1);
       
    }
    return (
        <div>
            <div className="kapsar">
            <div className="ortala">
        {products.map((product,index)=>(
    <Link  className="kutu-4 " key={index} to={`/urun/${product.id}`}>
      <div  className=" h-360" style={{cursor:"pointer"}}>
      <div className="kutu-title">
          <p><b>{product.name}</b></p>
      </div>
      <div className="kutu-icerik">
      <img src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1638612933/monster_u02hvi.png" style={{width:'calc(1100px/4)'}} alt=""></img>  
      <p style={{textAlign:'center'}}>{product.description}</p>
      <p style={{textAlign:'center', color:'#000'}}>Etiket : {product.slug}</p>
      </div>
      <div className="kutu-footer">
          <i className="mdi mdi-plus"></i> Ürün Detayı
      </div>
      </div>
    </Link>
    ))}
    <div className="pagination">
        <button onClick={ prevPage} disabled={pageNumber === 1}><i className="fa fa-arrow-left"></i></button>
        <button disabled>{totalPages} sayfa içinden {pageNumber}.</button>
        <button onClick={nextPage}  disabled={pageNumber === totalPages}><i className="fa fa-arrow-right"></i></button>
    </div>
  </div>
</div>
</div>
    )
}
