import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "../../services/AuthService";
import Cookies from 'universal-cookie';

export default function Login() {

    let authService = new AuthService();
  const authSchema = Yup.object().shape({
    email: Yup.string().required("Emaili boş bırakamazsınız"),
    password: Yup.string().required("Şifreyi boş bırakamazsınız")
  });

  const cookies = new Cookies();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: authSchema,
    onSubmit: (values) => {
      authService.login(values).then((result) =>

      cookies.set('accessToken', result.data.token) && cookies.set('uec',result.data.user.email)
      
      );
    },
  });

    return (
        <div>
             <form onSubmit={formik.handleSubmit}>
             <input
                  type="email"
                  placeholder="E-Posta"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                /> <br />
                {
                     formik.errors.email &&
                     formik.touched.email &&
                    <span style={{color:'red'}}>{formik.errors.email}</span> 
                }
                <br />
                <input
                  type="password"
                  placeholder="Şifre"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                /> <br />
                                {
                     formik.errors.password &&
                     formik.touched.password &&
                    <span>{formik.errors.password}</span> 
                }
                <br />
                <input type="submit" value="Giriş Yap" />
             </form>
        </div>
    )
}
