import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductService from '../../services/productService';

export default function Products() {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        let productService = new ProductService()
        productService.getProducts().then(result=>setProducts(result.data));
    },[]);

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
      {/* <p style={{textAlign:"center"}}></p> */}
      <p style={{textAlign:'center', color:'#000'}}>Etiket : {product.slug}</p>
      </div>
      {/* <a href=""> */}
      <div className="kutu-footer">
          <i className="mdi mdi-plus"></i> Ürün Detayı
      </div>
      {/* </a> */}
      </div>
    </Link>
    ))}
  </div>
</div>
        </div>
    )
}
