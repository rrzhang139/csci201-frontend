import React from "react";
import { useEffect, useState, useContext } from 'react';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Listing from './pages/Listing';
// import ListingDetails from './pages/ListingDetails';
import Login from './pages/Login';
import Header from './components/Header';
import UserContext from './UserContext'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
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
                <Header />
                < Switch >
                    <div stlye={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Route exact path="/">

                            <Home />
                        </Route>
                        {/* <Route path="/listingdetails/:listing" component={ListingDetails}></Route> */}
                        {/* <Route path="/listings" component={Listing} /> */}
                        <Route exact path="/listings">

                            <Listing />
                        </Route>
                        {/* <Route path="/chat">
                    <Header title={'Chat'} />
                    <Chat />
                </Route> */}
                        <Route exact path="/login">

                            <Login />
                        </Route>
                        <Route exact path="/logout">
                            <Logout />
                        </Route>
                    </div>
                </Switch >
            </Router>
        </UserContext.Provider>

    );
}

function Logout() {
    const { token, setToken } = useContext(UserContext)
    const history = useHistory()

    useEffect(async () => {
        setToken("");
        localStorage.clear();
        history.push("/login")
    }, [])

    return null
}

