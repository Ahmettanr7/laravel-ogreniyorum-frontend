import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import ProductService from '../../services/productService';

export default function Search() {

    let { search } = useParams();
    const [products, setProducts] = useState([]);
 let productService = new ProductService();
    useEffect(() => {
       
        productService
          .search(search)
          .then((result) => setProducts(result.data));
      }, []);

    return (
        <div className="kapsar">
            <div className="ortala">
                <div className="search-header">
                {products.length != 0 ? 
                <p><i class="fa fa-search"></i> <b>Arama Sonuçları: </b>  '{search}'</p> 
                :
                <p><i class="fa fa-search"></i> <b>Atama Sonuçları : </b>  '{search}' <b>Sonuç bulunamadı</b></p>}
                </div>
                
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
        </div>
        </div>
    )
}
