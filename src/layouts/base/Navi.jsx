import React, { useEffect, useState } from 'react'
import ProductService from '../../services/productService';

export default function Navi() {

    const [session,setSession] = useState({});

    useEffect(()=>{
        let productService = new ProductService()
        productService.getSession().then(result=>setSession(result.data))
    },[])
    return (
        <div>
            <div className="kapsar header">
    <div className="header-ust">
        <div className="ortala">
        <a href="/">
        <h2 style={{float:"left"}}>Laravel Kursum</h2>
        </a>
      
        <div className="isletme"><p><b>Müşteri Temsilcisi : 0850 254 54 87</b></p></div>
            <div className="search-container">
                <form id="aramaForm" method="POST">
                  <input type="text" placeholder="Ürünlerde Ara..." name="arama" id="arama"></input>
                  <button type="submit">Ara</button>
                </form>
              </div>
              {session.email !=null ? 
              (
                <div className="dropdown-container">
                <button><span><i className="fa fa-user-alt" style={{marginRight:"10px"}}></i><b style={{marginRight:"15px"}}>name </b></span></button>
                <nav>
                    <ul>
                        <li><a href="#"><i className="fa fa-chevron-right" style={{fontSize:"10px", marginRight:"3px"}}></i> Hesabım</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" style={{fontSize:"10px", marginRight:"3px"}}></i>Siparişlerim</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" style={{fontSize:"10px", marginRight:"3px"}}></i>Favorilerim</a></li>
                        <li><a href="#" style={{float:"right", padding:"15px"}}>Çıkış yap</a></li>
                    </ul>
                </nav>
                </div>
              ) 
              : 
              (
            <>
            <a href="#">
            <div className="mini-circle">Üye Ol</div>
            </a>
            <a href="#">
            <div className="mini-circle">Üye Girişi</div>
            </a>
            </>
              )}
        </div>
    </div>
    <div className="header-alt">
<div className="ortala">
    <ul className="menu">
        <a href="/">
        <li>Başlangıç</li>
        </a>
        <a href="#">
        <li>Ürün Ekle</li>
        </a>
        <a href="">
        <li>Satışlar</li>
        </a>
        <a href="">
        <li>Müşteriler</li>
        </a>
        <a href="">
        <li>Hizmetler ve Ürünler</li>
        </a>
        <a href="">
        <li>Tahsilatlar</li>
        </a>
        <a href="">
        <li>Giderler</li>
        </a>
        <a href="">
        <li>Görüşme Kayıtları</li>
        </a>

    </ul>
</div>
    </div>
</div>
        </div>
    )
}
