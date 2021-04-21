import React from "react"
import './Listings.css'

export default function Listings(){
    return(
        <>
        <div>
            <form>
                <label for="lname">Name of Listing:</label>
                <input className = "input" type="text" id="lname" name="lname" required="true"></input><br></br>
                <br></br>
                <label for="lname">Listing Address:</label>
                <input className = "input" type="text" id="laddress" name="laddress" required="true"></input><br></br>
                <br></br>
                <label for="lname">Square Footage:</label>
                <input className = "input" type="number" id="sfootage" name="sfootage" required="true" min="0"></input><br></br>
                <br></br>
                <label for="lname">Price:</label>
                <input className = "input" type="number" id="price" name="price" required="true" min="0"></input><br></br>
                <br></br>
                <label for="lname">Description:           </label>
                <input className = "input" type="textbox" id="description" name="description"required="true" style={{ width:"300px", height:"100px" }}></input><br></br>
                <br></br>
                <label className = "input" for="files">Select images:</label>
                <input type="file" id="files" name="files" multiple></input><br></br>
                <br></br>
                <input type="submit" value="Submit Listing" className="block"></input>
            </form>
        </div>
        </ >
    );
    
}