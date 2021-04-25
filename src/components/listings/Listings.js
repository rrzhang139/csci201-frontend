import React, { useNavigate, useState } from "react"
// import '../styles/listings/Listings.css'
import * as Yup from 'yup';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
import { postListing } from '../../Requests'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Listings({ setToken }) {

    const [lname, setLname] = useState("")
    const [address, setAddress] = useState("")
    const [sqft, setSqft] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")

    // const initialValues = {
    //     lname: '',
    //     address: '',
    //     sqft: '',
    //     price: '',
    //     desc: ''
    // };



    const handleSubmit = async () => {
        // e.preventDefault();

        const token = await postListing({
            lname,
            address,
            sqft,
            price,
            desc
        });
        setToken(token);
    }


    // const validationSchema = Yup.object().shape({
    //     lname: Yup.string()
    //         .required('Listing name is required'),
    //     address: Yup.string()
    //         .required('Address is required'),
    //     sqft: Yup
    //         .number('sqft must be a number')
    //         .required('sqft is required'),
    //     price: Yup
    //         .number('price must be a number')
    //         .required('price is required'),
    //     desc: Yup.string()
    //         .required('desc is required')
    // });



    return (
        <>
            <div style={{ width: "100%", padding: '30px', display: 'flex', flexDirection: "column", alignItems: "center" }}>
                <Form onSubmit={handleSubmit}>
                    <div class="Register">
                        <h1>Please Register</h1>
                        <br />
                        <Form.Group size="lg" controlId="lname">
                            <Form.Label>Listing Name</Form.Label>
                            <br />
                            <Form.Control
                                autoFocus
                                type="text"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="address" style={{ marginTop: "20px" }}>
                            <Form.Label>Address</Form.Label>
                            <br />
                            <Form.Control
                                type="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="sqft" style={{ marginTop: "20px" }}>
                            <Form.Label>Square Feet</Form.Label>
                            <br />
                            <Form.Control
                                type="number"
                                value={sqft}
                                onChange={(e) => setSqft(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="price" style={{ marginTop: "20px" }}>
                            <Form.Label>Price</Form.Label>
                            <br />
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="desc" style={{ marginTop: "20px" }}>
                            <Form.Label>Description</Form.Label>
                            <Form.Check
                                as='textarea'
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" style={{ marginTop: "20px" }}>
                            Register
                    </Button>
                    </div>
                </Form>
                {/* 
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmitRegister}>
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <div className="Register">
                                <h1>Post a Listing</h1>
                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="form-group col-5">
                                            <label>Name of Listing:</label>
                                            <Field name="lname" type="text" />
                                            <ErrorMessage name="lname" component="div" style={{ color: 'red' }} className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Listing Address:</label>
                                        <Field name="address" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="address" component="div" style={{ color: 'red' }} className="invalid-feedback" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Square Footage: </label>
                                            <Field name="sqft" type="number" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="sqft" component="div" style={{ color: 'red' }} className="invalid-feedback" />
                                        </div>
                                        <div className="form-group col">
                                            <label>Price: </label>
                                            <Field name="price" type="number" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="price" component="div" style={{ color: 'red' }} className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Description:</label>
                                        <Field name="desc" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="desc" component="div" style={{ color: 'red' }} className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    List!
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik> */}
            </div>
        </>
    );


    // let navigate = useNavigate();

    // function redirectToReport(rowData) {
    //     navigate('/listings'); // ??? I'm not sure if this is the right way
    // }


    return (
        <>
            <div>
                <form>
                    <label for="lname">Name of Listing:</label>
                    <input className="input" type="text" id="lname" name="lname" required="true"></input><br></br>
                    <br></br>
                    <label for="lname">Listing Address:</label>
                    <input className="input" type="text" id="laddress" name="laddress" required="true"></input><br></br>
                    <br></br>
                    <label for="lname">Square Footage:</label>
                    <input className="input" type="number" id="sfootage" name="sfootage" required="true" min="0"></input><br></br>
                    <br></br>
                    <label for="lname">Price:</label>
                    <input className="input" type="number" id="price" name="price" required="true" min="0"></input><br></br>
                    <br></br>
                    <label for="lname">Description:           </label>
                    <input className="input" type="textbox" id="description" name="description" required="true" style={{ width: "300px", height: "100px" }}></input><br></br>
                    <br></br>
                    <label className="input" for="files">Select images:</label>
                    <input type="file" id="files" name="files" multiple></input><br></br>
                    <br></br>
                    <input type="submit" value="Submit Listing" className="block"></input>
                </form>
            </div>
        </ >
    );

}