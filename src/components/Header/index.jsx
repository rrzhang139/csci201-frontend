import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem('token'));
        // Update the document title using the browser API
        console.log("token in header" + token)
        // sessionStorage.setItem('token', JSON.stringify(token))
        // localStorage.clear();
    }, [token]);//only run if token changes


    const loginHandle = () => {

        if (token) {
            return (
                <div class="topnav">
                    <Link to='/'>Home</Link>
                    <Link to='/listings'>Listings</Link>
                    <Link to='/logout' >Logout</Link>
                    <a class="right-active" href="/">USC housing</a>
                </div>
            )
        } else {
            return (
                <div class="topnav">
                    <Link to='/'>Home</Link>
                    <a href='/login' >Login</a>
                    <a class="right-active" href="/">USC housing</a>

                </div>
            )
        }
    }
    return (
        <>
            {loginHandle()}
        </>
    )
}