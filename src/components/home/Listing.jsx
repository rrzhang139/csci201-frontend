import React from "react";
import { Row, InputGroup, FormControl, Button, Col } from "react-bootstrap";
import "../../styles/home/Listing.css";



function Listing(props) {
    return (
        <div class="item">
            <div class="picture">
                <h1>insert picture here</h1>
            </div>

            <div class="description">
                <h4>Title: {props.title}</h4>

                <p><b>Location:</b> {props.loc}</p>

                <p><b>Content:</b> {props.body}</p>

                <h5>Posted At: {props.day}/{props.month}/{props.year}</h5>
            </div>


        </div>


    );
}

export default Listing;