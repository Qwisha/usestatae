import About from "./About";
import { Routes, Route, Link } from "react-router-dom";


const Home = () => {
    return(
        <>
            <h1>Register</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Mobile" />
            <Link to="/about" element={<About/>}><input type="Button" value="Submit" /></Link>
            
        </>
    )
}

export default Home;