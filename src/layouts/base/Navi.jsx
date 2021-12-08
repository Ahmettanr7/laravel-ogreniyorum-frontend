import { useFormik } from 'formik';
import React from 'react'
import Cookies from 'universal-cookie';

export default function Navi(props) {


    const cookies = new Cookies();
    let email = cookies.get('uec');

function logout(){

        cookies.remove('uec');
        cookies.remove('accessToken');
        window.location.href = '/';
}

const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
     window.location.href = '/urunler/'+values.search
    },
  });


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

                <form onSubmit={formik.handleSubmit}>
                  <input  onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" placeholder="Ürünlerde Ara..." name="search" id="arama"></input>
                  <button type="submit">Ara</button>
                </form>

              </div>
              {email ? 
              (
                <div className="dropdown-container">
                <button><span><i className="fa fa-user-alt" style={{marginRight:"10px"}}></i><b style={{marginRight:"15px"}}>{props.user_.name} </b></span></button>
                <nav>
                    <ul>
                        <li><a href="#"><i className="fa fa-chevron-right" style={{fontSize:"10px", marginRight:"3px"}}></i> Hesabım</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" style={{fontSize:"10px", marginRight:"3px"}}></i>Siparişlerim</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right" style={{fontSize:"10px", marginRight:"3px"}}></i>Favorilerim</a></li>
                        <li><a href="#" onClick={logout} style={{float:"right", padding:"15px"}}>Çıkış yap</a></li>
                    </ul>
                </nav>
                </div>
              ) 
              : 
              (
            <>
            <a href="/register">
            <div className="mini-circle">Üye Ol</div>
            </a>
            <a href="/login">
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
