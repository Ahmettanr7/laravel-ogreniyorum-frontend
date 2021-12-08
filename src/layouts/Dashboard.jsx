import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Products from "./Product/Products";
import Navi from "./base/Navi";
import Product from "./Product/Product";
import Login from "./base/Login";
import AuthService from "../services/AuthService";
import Cookies from "universal-cookie";
import EditProduct from "./Product/EditProduct";
import AddProduct from "./Product/AddProduct";
import Search from "./base/Search";
//import ChartReport from "./base/ChartReport";

export default function Dashboard() {
  //Kullanıcı bilgileri
  const cookies = new Cookies();
  let email = cookies.get("uec");
  const [user, setUser] = useState({});

  useEffect(() => {
    let authService = new AuthService();
    authService.getUserByEmail(email).then((result) => setUser(result.data));
  }, []);

  //Kullanıcı Bilgileri biter
  return (
    <div>
      <Route exact path="/">
        <Navi user_={user} />
        {/* <ChartReport/> */}
        <Products />
      </Route>

      <Route exact path="/urun/:id">
        <Navi user_={user} />
        <Product user_={user} />
      </Route>

      <Route exact path="/urunler/:search">
        <Navi user_={user} />
        <Search  />
      </Route>

      {user.email != null ? (
        ((
          <Route exact path="/urun-duzenle/:id">
            <Navi user_={user} />
            <EditProduct />
          </Route>
        ),
        (
          <Route exact path="/urun-ekle">
            <Navi user_={user}/>
            <AddProduct />
          </Route>
        ))
      ) : (
        <></>
      )}
      <Route exact path="/login" component={Login} />
    </div>
  );
}
