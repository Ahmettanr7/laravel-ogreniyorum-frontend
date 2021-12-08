import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "../../services/AuthService";
import Cookies from "universal-cookie";

export default function Login() {
  let authService = new AuthService();
  const authSchema = Yup.object().shape({
    email: Yup.string().required("Emaili boş bırakamazsınız"),
    password: Yup.string()
      .required("Şifreyi boş bırakamazsınız")
      .min(5, "Şifreniz en az 5 karakterli olmalıdır."),
  });

  const cookies = new Cookies();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authSchema,
    onSubmit: (values) => {
      authService
        .login(values)
        .then((result) =>
          result.data.token
            ? (cookies.set("accessToken", result.data.token),
              cookies.set("uec", values.email),
              alert(result.data.message + ' Ana sayfaya yönlendirileceksiniz.'),
              window.location.href = '/')
            : alert(result.data.message)
        );
    },
  });

  return (
    <div className="kapsar">
      <div className="loginForm">
        <h1>Laravel Öğreniyorum</h1>
        {formik.errors.email && formik.touched.email ?
        (
        <div className="alert">
           {formik.errors.email && formik.touched.email && (
          <span>{formik.errors.email}</span>)}
        </div>
        ):
        (
        <div></div>
        )
        }
                {formik.errors.password && formik.touched.password ?
        (
        <div className="alert">
           {formik.errors.password && formik.touched.password && (
          <span>{formik.errors.password}</span>)}
        </div>
        ):
        (
        <div></div>
        )
        }
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder="E-Posta"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        
        <br />
        <input
          type="password"
          placeholder="Şifre"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        <input type="submit" value="Giriş Yap" />
      </form>
      </div>
    </div>
  );
}
