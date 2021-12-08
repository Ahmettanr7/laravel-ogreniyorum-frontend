import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import ProductService from '../../services/productService';

export default function Product(props) {
    let { id } = useParams();
    const [product, setProduct] = useState({});
 let productService = new ProductService();
    useEffect(() => {
       
        productService
          .getByIdProduct(id)
          .then((result) => setProduct(result.data));
      }, []);

      let delete_ = (id) => {
        productService.delete(id).then((result) =>
        result.data.status_code === 201
          ? (alert(result.data.message),
            window.location.href = '/')
          : alert(result.data.message)
      );

      }

    return (
        <div className="kapsar mt-20">
  <div className="ortala">

    <img src="https://res.cloudinary.com/ahmettanrikulu/image/upload/v1638612933/monster_u02hvi.png" style={{width:'45%', float:'left'}} alt=""></img>

    <table>
      <thead>
  <tr>
    <th>Ürün Adı</th>
    <th>Açıklama</th>
    <th>Fiyat</th>
    <th></th>
    <th></th>
  </tr>
  </thead>
   <tbody>
  <tr>
    <td> {product.name} </td>
    <td> {product.description} </td>
    <td><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' ₺'} /> </td>
    {props.user_.email != null ? (  <td><button onClick={() => {
      if(window.confirm(product.name + ' silinecek ?')){delete_(id)}}}>Sil</button></td>) : (<></>)}
   
    <Link  to={`/urun-duzenle/${product.id}`}>
    {props.user_.email != null ? ( <td><button>Düzenle</button></td>) : (<></>)}
    </Link>
  </tr>
  </tbody>
</table>

</div>
</div>
    )
}
