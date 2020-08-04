import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { HomeScreen } from '../components/home/HomeScreen';
import { ContactScreen } from '../components/contact/ContactScreen';
import { ProductsScreen } from '../components/products/ProductsScreen';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { ProductDetailScreen } from '../components/poduct-detail/ProductDetailScreen';
import { CarScreen } from '../components/car/CarScreen';

export const HomeRoutes = () => {
    return (
        <>
            <div className="routes__main">
                <div id="above">
                    <Navbar />
                </div>
                <div id="middle">
                    <Switch>
                        <Route exact path="/home" component={HomeScreen} />
                        <Route exact path="/contact" component={ContactScreen} />
                        <Route exact path="/products" component={ProductsScreen} />
                        <Route exact path="/products/:id" component={ProductDetailScreen} />
                        <Route exact path="/car" component={CarScreen} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <div id="below">
                    <Footer />
                </div>
            </div>
        </>
    )
}
