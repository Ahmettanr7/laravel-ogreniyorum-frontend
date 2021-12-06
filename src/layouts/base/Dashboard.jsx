import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import Products from "./Products";
import Navi from "./Navi";
import Product from "./Product";
import Login from "./Login";
import AuthService from '../../services/AuthService';
import Cookies from 'universal-cookie';


export default function Dashboard() {

      //Kullanıcı bilgileri
  const cookies = new Cookies();
  let email = cookies.get('uec');
  const [user,setUser] = useState({});

  
  useEffect(()=>{
    let authService = new AuthService()
    authService.getUserByEmail(email).then(result=>setUser(result.data));
},[]);

//Kullanıcı Bilgileri biter+
    return (
        <div>
            <Route exact path='/'><Navi user_={user}/></Route>
            <Route exact path='/' component={Products}/>

            <Route exact path='/urun/:id' component={Navi}/>
            <Route exact path='/urun/:id' component={Product}/>

            <Route exact path='/login' component={Login}/>
        </div>
    )
}
