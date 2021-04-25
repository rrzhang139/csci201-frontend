export async function loginUser(credentials) {
    return fetch(`http://localhost:8080/rrzhang_CSCI201L_Assignment4_/LoginServlet?username=${credentials.username}&password=${credentials.password}`, {
        method: 'GET'
    })
        .then(data => data.json())
}

export async function registerUser(credentials) {
    return await fetch(`http://localhost:8080/rrzhang_CSCI201L_Assignment4_/RegisterServlet?username=${credentials.username}&password=${credentials.password}&email=${credentials.email}`, {
        method: 'POST'
    }).then(res => res.text())//.catch(() => alert("Either username or email is taken"))
}

export async function postListing(data) {
    const response = await fetch(`http://localhost:8080/csci201-final/ListingInfoServlet?lname=${data.lname}&address=${data.address}&sqft=${data.sqft}&price=${data.price}&desc=${data.desc}`, { method: 'POST' });
    const json = await response.json();
}

//listing name, address, sqft, price, desc
export async function getListings(data) {
    const response = await fetch(`http://localhost:8080/csci201-final/ListingInfoServlet?`, { method: 'GET' });
    const json = await response.json();
}