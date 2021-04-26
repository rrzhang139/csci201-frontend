import React, { useEffect, useState } from "react";
import { Row, InputGroup, FormControl, Button, Col } from "react-bootstrap";
import "../../styles/home/Window.css";
import ProgressBar from "./ProgressBar.jsx";
import Listing from './Listing.jsx';
import { getListings, removeListing } from '../../Requests'
import { useHistory } from "react-router-dom"
import img1 from './img/1.jpg';
// import img2 from './img/2.png';
// import img3 from './img/3.png';

function Window(props) {
    const [list, setList] = useState([]);
    const history = useHistory();
    const [token, setToken] = useState(localStorage.getItem('token'));

    const images = [
        img1
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
        console.log("HERE IS OUR DATA: " + data)
        data = JSON.parse(data) //in list form
        await setList(data)
    }, [])

    const handleDetailsPage = async (index) => {
        const lname = list[index].lname
        // history.push(`/listingdetails/${lname}`)
    }

    const handleRemove = async (index) => {
        // await removeListing
        const newList = [...list];
        const lname = newList[index].lname
        newList.splice(index, 1);
        await removeListing({ lname, token })
    }

    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <h1>Welcome to the USC Housing Website!</h1>
            <Row>
                {/* <button onClick={() => fetchInfo}></button> */}
                <div class="current-listings-container">
                    <ul>
                        {list.map((listing, index) => {
                            return (
                                <Listing title={listing.lname} loc={listing.address} body={listing.desc} year='2021' month='5' day='5' token={listing.token} image={images[0]} moveIn={listing.moveIn} moveOut={listing.moveOut} contact={listing.contact} index={index} handleRemove={handleRemove} />
                            );
                        })}
                    </ul>
                </div>
            </Row>
        </div>
    );
}

export default Window;