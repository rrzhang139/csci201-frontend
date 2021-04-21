import React from "react";
import { useEffect, useState, useContext } from 'react';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Listing from './pages/Listing';
import Login from './pages/Login';
import Header from './components/Header';
import UserContext from './UserContext'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    const [token, setToken] = useState("");



    useEffect(async () => {
        const loggedInUser = localStorage.getItem('token');
        console.log("our token: ", loggedInUser)
        if (loggedInUser) {
            // const foundUser = JSON.parse(loggedInUser);
            setToken(loggedInUser);
        }
        // history.push("/")
    }, [token]);

    return (
        <UserContext.Provider value={{ token, setToken }}>
            <Router>
                < Switch >
                    <Route exact path="/">
                        <Header />
                        <Listing />
                    </Route>
                    {/* <Route path="/listings" component={Listing} /> */}
                    <Route exact path="/listings">
                        <Header />
                        <Listing />
                    </Route>
                    {/* <Route path="/chat">
                    <Header title={'Chat'} />
                    <Chat />
                </Route> */}
                    <Route exact path="/login">
                        <Header />
                        <Login />
                    </Route>

                </Switch >
            </Router>
        </UserContext.Provider>

    );
}



