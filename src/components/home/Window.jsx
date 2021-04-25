import React, { useEffect, useState } from "react";
import { Row, InputGroup, FormControl, Button, Col } from "react-bootstrap";
import "../../styles/home/Window.css";
import ProgressBar from "./ProgressBar.jsx";
import Listing from './Listing.jsx';
import { getListings } from '../../Requests'
import { useHistory } from "react-router-dom"
import img1 from './img/1.jpg';
// import img2 from './img/2.png';
// import img3 from './img/3.png';

function Window(props) {
    const [list, setList] = useState([]);
    const history = useHistory();

    const images = [

    ]
    // const listItems = numbers.map((number) =>
    //     <li>{number}</li>
    // );
    //name, location, content, date
    // async function fetchInfo() {
    //     const response = await fetch("http://localhost:8080/csci201-final/ListingInfoServlet", { method: 'GET' },);
    //     const json = await response.json();
    // }

    useEffect(async () => {
        var { data } = await getListings();
        data = JSON.parse(data) //in list form
        await setList(data)
    }, [])

    const handleDetailsPage = async (index) => {
        const lname = list[index].lname
        history.push(`/listingdetails/${lname}`)
    }

    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <h1>Listings</h1>
            <img src={img1}></img>
            <Row>
                {/* <button onClick={() => fetchInfo}></button> */}
                <div class="current-listings-container">
                    <ul>
                        {list.map((listing, index) => {
                            return (
                                <Listing title="Nice apartment" loc="203 Hoover St" body="very nice place with pool and bar" year='2021' month='5' day='5' token={listing.token} />
                            );
                        })}
                    </ul>
                </div>
            </Row>
        </div>
    );
}

export default Window;