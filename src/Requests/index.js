export async function loginUser(credentials) {
    return fetch(`http://localhost:8080/FinalProj/LoginServlet?username=${credentials.username}&password=${credentials.password}`, {
        method: 'GET'
    })
        .then(data => data.json()).catch(() => alert("Invalid credentials"))
}

export async function registerUser(credentials) {
    return await fetch(`http://localhost:8080/FinalProj/RegisterServlet?username=${credentials.username}&password=${credentials.password}&email=${credentials.email}`, {
        method: 'POST'
    }).then(res => res.text())//.catch(() => alert("Either username or email is taken"))
}

export async function postListing(data) {
    console.log("in posting")
    const response = await fetch(`http://localhost:8080/FinalProj/ListingInfoServlet?lname=${data.lname}&address=${data.address}&sqft=${data.sqft}&price=${data.price}&desc=${data.desc}&token=${data.token}&moveIn=${data.moveIn}&moveOut=${data.moveOut}&contact=${data.contact}`, { method: 'POST' });
    const text = await response.text();
    return text
}

//listing name, address, sqft, price, desc
export async function getListings(data) {
    const response = await fetch(`http://localhost:8080/FinalProj/ListingInfoServlet`, { method: 'GET' });
    const json = await response.json();
    console.log(json)
    return json;
}

export async function removeListing(data) {
    const response = await fetch(`http://localhost:8080/FinalProj/RemoveListingServlet?lname=${data.lname}&token=${data.token}`, { method: 'GET' });
    // const json = await response.json();
    // return json;
}