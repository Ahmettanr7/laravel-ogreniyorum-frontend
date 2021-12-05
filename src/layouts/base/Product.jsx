import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import ProductService from '../../services/productService';

export default function Product() {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService();
        productService
          .getByIdProduct(id)
          .then((result) => setProduct(result.data));
      }, []);

    return (
        <div className="kapsar mt-20">
  <div className="ortala">

    <img src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1638612933/monster_u02hvi.png" style={{width:'45%', float:'left'}} alt=""></img>

    <table>
  <tr>
    <th>Ürün Adı</th>
    <th>Açıklama</th>
    <th>Fiyat</th>
    <th></th>
    <th></th>
  </tr>

   
  <tr>

    <td> {product.name} </td>
    <td> {product.description} </td>
    <td> {product.price} </td>
    <td><button>Sil</button></td>
    <td><button>Düzenle</button></td>
  </tr>
</table>

</div>
</div>
    )
}
