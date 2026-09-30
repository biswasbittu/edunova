import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";


const Mainlyaouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Mainlyaouts;