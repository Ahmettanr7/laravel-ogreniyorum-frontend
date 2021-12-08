import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ProductService from "../../services/productService";
import Cookies from "universal-cookie";
import NumberFormat from 'react-number-format';
import $ from 'jquery';

export default function AddProduct() {
  const cookies = new Cookies();
  let productsService = new ProductService();
  const addProductSchema = Yup.object().shape({
    name: Yup.string().required("Ürün ismini boş bırakamazsınız"),
    slug: Yup.string().required("Etiket alanı boş bırakılamaz"),
    pricee: Yup.string().required("Fiyatı boş bırakamazsınız."),
    tax: Yup.string().required("Fiyatı boş bırakamazsınız."),
  });

const [total,setTotal] = useState(0);
  const formik = useFormik({
    initialValues: {
      name: "",
      slug: "",
      description: "",
      pricee: "",
      tax: "",
      price: "",
      token: cookies.get("accessToken")
    },
    validationSchema: addProductSchema,
    onSubmit: (values) => {
      values.pricee = values.pricee.replace(/₺/g,"");
      values.pricee = values.pricee.replace(/,/g,"");
      values.pricee = values.pricee.replace(/ /g,"");
      values.pricee = values.pricee*1;
      values.tax = values.tax.replace(/%/,"")
      values.tax = values.tax.replace(/ /,"")
      values.tax = values.tax*1;
      values.price = values.price*1;
      values.price = values.pricee + (values.pricee * values.tax) / 100;
      setTotal(values.price);
    },
  });
  const formik2 = useFormik({
    initialValues: {
      name: "",
      slug: "",
      description: "",
      price: "",
      token: cookies.get("accessToken")
    },
    onSubmit: (values) => {
      values.name = formik.values.name
      values.slug = formik.values.slug
      values.price = formik.values.price
      values.description = formik.values.description
            productsService
        .add(values)
        .then((result) =>
          result.data.status_code === 201
            ? (alert(result.data.message),
              (window.location.href = "/urun/" + result.data.id))
            : alert(result.data.message)
        );
    },
  });

  return (
    <div className="kapsar">
      <div className="loginForm">

      {formik.errors.name && formik.touched.name ? (
            <div className="alert">
                <span>{formik.errors.name}</span>
            </div>
          ) : (
            <div></div>
          )}
              {formik.errors.slug && formik.touched.slug ? (
            <div className="alert">
                <span>{formik.errors.slug}</span>
            </div>
          ) : (
            <div></div>
          )}
                {formik.errors.price && formik.touched.price ? (
            <div className="alert">
                <span>{formik.errors.price}</span>
            </div>
          ) : (
            <div></div>
          )}

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Ürün Adı</label>
          <br />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="name"
            id="name"
          />
          <br />
          <label htmlFor="slug">Ürün Etiketi</label>
          <br />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="slug"
            id="slug"
          />
          <br />
          <label htmlFor="description">Açıklama</label>
          <br />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="description"
            id="description"
          />
          <br />
          <label htmlFor="price">Fiyat</label>
          <br />
            <NumberFormat
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             name="pricee"
             id="pricee"
             thousandSeparator={true}
             style={{textAlign:'right'}}
             suffix={" ₺"}
            />
          <label htmlFor="tax">Vergi</label>
          <br />
            <NumberFormat
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             name="tax"
             id="tax"
             thousandSeparator={true}
             style={{textAlign:'right'}}
             suffix={" %"}
            />
          <br />
          <input style={{width:'40%',float:'left',marginTop:'20px'}} type="submit" value="Toplamı Hesapla" />
        </form>
        <form onSubmit={formik2.handleSubmit}>
          <br />
            <NumberFormat
             onChange={formik2.handleChange}
             onBlur={formik2.handleBlur}
             name="price"
             id="price"
             thousandSeparator={true}
             style={{textAlign:'right',float:'right',width:'40%'}}
             suffix={" ₺"}
             value={total}
             disabled
            />
          <br />
          <input type="submit" value="Ürünü Ekle" style={{marginTop:'10px'}} />
        </form>
      </div>
    </div>
  );
}
