import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom"
import "./Register.css";
import * as Yup from 'yup';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
import UserContext from "../../UserContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { registerUser } from '../../Requests'



export default function Register() {
    const { setToken } = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [agreeToTos, setAgreeToTos] = useState(false)
    const history = useHistory()



    const handleSubmitRegister = async (e) => {
        e.preventDefault()
        if (username.length < 6 || password.length < 6) {
            alert("Username or Password is too short")
        } else if (password !== confirmPassword) {
            alert("Passwords dont match")
        } else if (!agreeToTos) {
            alert("Please agree to the Terms of Service")
        } else {
            const token = await registerUser({
                username,
                password,
                email
            });
            if (token) {
                console.log("set token: ", token)
                // console.log("set balance: ", data.balance)
                // console.log("set cash: ", data.cash)
                setToken(token)
                localStorage.setItem('token', token);
                localStorage.setItem('cash', 50000);
                await history.push("/")
            } else {
                alert("Either username or email is taken")
            }
        }

    }



    return (
        <>
            <div className="Register">
                <Form onSubmit={handleSubmitRegister}>
                    <div class="Register">
                        <h1>Please Register</h1>
                        <br />
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <br />
                            <Form.Control
                                autoFocus
                                type="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="email" style={{ marginTop: "20px" }}>
                            <Form.Label>Email</Form.Label>
                            <br />
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <Form.Group size="lg" controlId="confirmPassword" style={{ marginTop: "20px" }}>
                            <Form.Label>Confirm Password</Form.Label>
                            <br />
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="agreeToTos" style={{ marginTop: "20px" }}>
                            <Form.Label>Terms and Conditions</Form.Label>
                            <Form.Check
                                type="checkbox"
                                value={agreeToTos}
                                onChange={(e) => setAgreeToTos(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" style={{ marginTop: "20px" }}>
                            Register
                    </Button>
                    </div>
                </Form>
            </div>

        </>
    );
}