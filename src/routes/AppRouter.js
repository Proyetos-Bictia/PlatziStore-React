import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { HomeRoutes } from './HomeRoutes';
import { LoginScreen } from '../components/auth/LoginScreen';
import { startLoadingProducts } from '../actions/products';
import { AdminRoutes } from './AdminRoutes';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false)
            }
        })
    }, [dispatch])

    useEffect(() => {
        dispatch(startLoadingProducts())
    }, [dispatch])

    console.log(isLoggedIn);
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/auth"
                        component={LoginScreen}
                    />
                    {/* <Route
                        path="/admin"
                        component={AdminRoutes}
                    /> */}
                    <PrivateRoute
                        isLoggedIn={isLoggedIn}
                        component={AdminRoutes}
                        path="/admin"
                    />
                    <Route
                        path="/"
                        component={HomeRoutes}
                    />
                    {/* <Redirect to="/auth" /> */}
                </Switch>
            </div>
        </Router>
    )
}
