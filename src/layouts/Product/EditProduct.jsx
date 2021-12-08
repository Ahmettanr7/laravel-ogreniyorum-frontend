import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router";
import ProductService from "../../services/productService";

export default function EditProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getByIdProduct(id).then((result) => setProduct(result.data));
  }, []);

  let productsService = new ProductService();
  const editProductSchema = Yup.object().shape({
    name: Yup.string().required("Ürün ismini boş bırakamazsınız"),
    slug: Yup.string().required("Etiket alanı boş bırakılamaz"),
    price: Yup.number().required("Fiyatı boş bırakamazsınız."),
  });

  const formik = useFormik({
    initialValues: {
      id: id,
      name: "",
      slug: "",
      description: "",
      price: "",
    },
    validationSchema: editProductSchema,
    onSubmit: (values) => {
      productsService.edit(values).then((result) =>
        result.data.status_code === 200
          ? (alert(result.data.message),
            window.location.href = '/urun/'+id)
          : alert(result.data.message)
      );
    //console.log(values);
    },
  });

  return (
    <>
      <div className="kapsar mt-20">
        <div className="loginForm">
          {formik.errors.name && formik.touched.name ? (
            <div className="alert">
              {formik.errors.name && formik.touched.name && (
                <span>{formik.errors.name}</span>
              )}
            </div>
          ) : (
            <div></div>
          )}
          {formik.errors.slug && formik.touched.slug ? (
            <div className="alert">
              {formik.errors.slug && formik.touched.slug && (
                <span>{formik.errors.slug}</span>
              )}
            </div>
          ) : (
            <div></div>
          )}
          {formik.errors.price && formik.touched.price ? (
            <div className="alert">
              {formik.errors.price && formik.touched.price && (
                <span>{formik.errors.price}</span>
              )}
            </div>
          ) : (
            <div></div>
          )}

          <form onSubmit={formik.handleSubmit}>
            <label>Ürün Adı</label>
            <br />
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="name"
              defaultValue={product.name}
            />
            <br />
            <label>Etiket</label>
            <br />
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="slug"
              defaultValue={product.slug}
            />
            <br />
            <label>Açıklama</label>
            <br />
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="description"
              defaultValue={product.description}
            />
            <br />
            <label>Fiyat</label>
            <br />
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="price"
              defaultValue={product.price}
            />
            <br />
            <input hidden type="text" name="id" value={product.id} />
            <input type="submit" value="Değişiklikleri Kaydet" />
          </form>
        </div>
      </div>
    </>
  );
}
