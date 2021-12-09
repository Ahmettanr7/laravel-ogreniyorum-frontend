import React, { useEffect, useState } from 'react'
import {Doughnut} from 'react-chartjs-2';
import ProductService from '../../services/productService';

export default function ChartReport() {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        let productService = new ProductService()
        productService.getProducts(1).then(result=>setProducts(result.data.data));
    },[]);

    const data = {
        labels: 
            products.map((product)=>(product.name))
        ,
        datasets: [{
            data: products.map((product)=>(product.price)),
            backgroundColor: [
                '#8dace7',
                '#71deb9',
                '#ef869e',
                '#e5e5e5',
                '#000',
                '#f5f5f5',
                '#fff'
            ],
            hoverBackgroundColor: [
                '#7097e1',
                '#4dd6a7',
                '#eb6886',
                '#8dace7',
                '#71deb9',
                '#f5f5f5',
                '#fff'
            ]
        }]
    };

    return (
        <div className="kapsar">
        <div className="ortala">
            <div className="kutu-12" style={{height:'maxContent'}}>
        <div className="doughnut-data">
       <Doughnut data={data}/>
        </div>
        </div>
        </div>
        </div>
    )
}
