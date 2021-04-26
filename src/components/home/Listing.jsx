import React, { useState } from "react";
import { Row, InputGroup, FormControl, Button, Col } from "react-bootstrap";
import "../../styles/home/Listing.css";
import FittedImage from 'react-fitted-image'

function Listing(props) {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div class="item">
            <div class="picture">
                {/* <img class="image" src={props.image}></img> */}
                <FittedImage
                    fit="cover"
                    loader={<div>Loading</div>}
                    onLoad={(...args) => console.log(...args)}
                    onError={(...args) => console.log(...args)}
                    src={props.image}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                <div>
                    <h2>{props.title} </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", width: "100%" }}>
                    <div class="description">

                        <p><b>Location:</b> {props.loc}</p>

                        <h5>Move-In: {props.moveIn}</h5>
                        <h5>Move-Out: {props.moveOut}</h5>
                    </div>
                    <div class="description">
                        {token === props.token ? (<button onClick={(e) => props.handleRemove(props.index)}>
                            <h3>Remove Listing </h3>
                        </button>) : <>
                                <h3>Contact the Owner: </h3>
                                <h5> +{props.contact}</h5>
                            </>}
                    </div>
                </div>
                <p><b>Content:</b> {props.body}</p>
            </div>


        </div>


    );
}

export default Listing;