import React, { useEffect, useState } from 'react'
import ProductService from '../../services/productService';
import MUIDataTable from "mui-datatables";

export default function DataTableExample() {

  const [products,setProducts] = useState([]);
  let productService = new ProductService()
    useEffect(()=>{
        
        productService.getProducts(1).then(result=>setProducts(result.data.data));
    },[]);

    const columns = ["#", "Ürün", "Etiket", "Fiyat"];
    const data = products.map((product)=>(
      [product.id, product.name, product.slug, product.price]
    ))
    const options = {
      filter: true,
      filterType: 'checkbox',
      responsive: 'vertical',
      searchPlaceholder: 'Arama Yap',
      onRowClick: (event, rowData) => {
        window.location.href = 'urun/'+event[0];
     },
     //onRowDelete:(event, rowData)
    };

    return (
        <div className="kapsar">
            <div className="ortala">
            <MUIDataTable
            title={"Ürünler"} 
            data={data} 
            columns={columns} 
            options={options}
      />
            </div>  
        </div>
    )
}
