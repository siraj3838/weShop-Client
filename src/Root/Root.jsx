import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-[84px] md:mt-24 lg:mt-[131px]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;