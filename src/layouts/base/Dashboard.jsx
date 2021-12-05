import React from "react";
import { Route } from "react-router-dom";
import Products from "./Products";
import Navi from "./Navi";
import Product from "./Product";
import Login from "./Login";


export default function Dashboard() {

    return (
        <div>
            <Route exact path='/' component={Navi}/>
            <Route exact path='/' component={Products}/>

            <Route exact path='/urun/:id' component={Navi}/>
            <Route exact path='/urun/:id' component={Product}/>

            <Route exact path='/login' component={Login}/>
        </div>
    )
}
