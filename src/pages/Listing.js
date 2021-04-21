
import '../styles/listings/Listing.css';
import Listings from "../components/listings/Listings.js"
// import Header from "../components/listings/Header.js"


function Listing() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <Header /> */}
      <br></br>
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <img src="https://media.xconomy.com/wordpress/wp-content/images/2015/07/06165251/USC-and-downtown-Los-Angeles-courtesy-USC.jpg" />
      <br></br>
      <Listings />
      {/* </header> */}
    </div>
  );
}

export default Listing;
