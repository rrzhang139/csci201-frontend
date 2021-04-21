import '../styles/Home.css';
// import Top from "../components/Header";
import Window from "../components/home/Window"
import ProgressBar from 'react-bootstrap/ProgressBar';
function Home() {
    return (
        <div style={{ justifyContent: "center" }}>
            {/* <Top title="Home"></Top> */}
            <Window></Window>
        </div>
    );
}

export default Home;