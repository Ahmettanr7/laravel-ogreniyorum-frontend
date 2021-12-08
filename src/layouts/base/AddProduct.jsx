import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ProductService from "../../services/productService";
import Cookies from "universal-cookie";

export default function AddProduct() {
  const cookies = new Cookies();
  let productsService = new ProductService();
  const addProductSchema = Yup.object().shape({
    name: Yup.string().required("Ürün ismini boş bırakamazsınız"),
    slug: Yup.string().required("Etiket alanı boş bırakılamaz"),
    price: Yup.number().required("Fiyatı boş bırakamazsınız.").min(0,'Fiyat 0 dan büyük olmalıdır.'),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      slug: "",
      description: "",
      price: "",
    },
    validationSchema: addProductSchema,
    onSubmit: (values) => {
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
          <label for="name">Ürün Adı</label>
          <br />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="name"
            id="name"
          />
          <br />
          <label for="slug">Ürün Etiketi</label>
          <br />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="slug"
            id="slug"
          />
          <br />
          <label for="description">Açıklama</label>
          <br />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="description"
            id="description"
          />
          <br />
          <label for="price">Fiyat</label>
          <br />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="number"
            name="price"
            id="price"
            min="0"
          />
          <br />
          <br />
          <input
            type="text"
            hidden
            name="token"
            value={cookies.get("accessToken")}
          />
          <input type="submit" value="Ekle" />
        </form>
      </div>
    </div>
  );
}
