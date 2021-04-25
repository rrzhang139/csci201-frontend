import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom"
import UserContext from "../UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { registerUser, loginUser } from '../Requests'
import '../styles/Login.css'
import Register from '../components/Register'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { token, setToken } = useContext(UserContext)

    const handleSubmit = async e => {
        e.preventDefault();
        const user = await loginUser({
            username,
            password
        });
        console.log(user)
        if (user) {
            console.log("set token in login: ", user.token)
            setToken(user.token)
            localStorage.setItem('token', user.token);
            history.push("/")
        } else {
            alert("Invalid credentials")
        }
    }



    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", height: '500px', marginTop: "10%" }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", height: "100%" }}>
                <div className="Login">
                    <h1>Please Login</h1>

                    <Form onSubmit={handleSubmit} >
                        <div class="Login">
                            <Form.Group size="lg" controlId="user" >
                                <Form.Label>Username</Form.Label>
                                <br />
                                <Form.Control
                                    autoFocus
                                    type="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password" style={{ marginTop: "20px" }}>
                                <Form.Label>Password</Form.Label>
                                <br />
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <br />
                            <Button block size="lg" type="submit" >
                                Login
                                </Button>
                        </div>
                    </Form>


                </div>
                <Register />
            </div>
        </div>

    );
}