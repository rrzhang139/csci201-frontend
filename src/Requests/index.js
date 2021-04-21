
export async function loginUser(credentials) {
    return fetch(`http://localhost:8080/rrzhang_CSCI201L_Assignment4_/LoginServlet?username=${credentials.username}&password=${credentials.password}`, {
        method: 'GET'
    })
        .then(data => data.text())
}

export async function registerUser(credentials) {
    return await fetch(`http://localhost:8080/rrzhang_CSCI201L_Assignment4_/RegisterServlet?username=${credentials.username}&password=${credentials.password}&email=${credentials.email}`, {
        method: 'POST'
    }).then(res => res.text())//.catch(() => alert("Either username or email is taken"))
}

export async function postListing(data) {
    const response = await fetch("http://localhost:8080/csci201-final/ListingInfoServlet", { method: 'POST', body: JSON.stringify(data) });
    const json = await response.json();
}