import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Products from "./Products";
import Navi from "./Navi";
import Product from "./Product";
import Login from "./Login";
import AuthService from "../../services/AuthService";
import Cookies from "universal-cookie";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";
import Search from "./Search";

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
      </Route>

      <Route exact path="/">
        <Products />
      </Route>

      <Route exact path="/urun/:id">
        <Navi user_={user} />
      </Route>

      <Route exact path="/urun/:id">
        <Product user_={user} />
      </Route>

      <Route exact path="/urunler/:search">
        <Navi user_={user} />
      </Route>
      <Route exact path="/urunler/:search">
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
