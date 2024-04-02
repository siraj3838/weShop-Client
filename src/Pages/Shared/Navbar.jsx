import Header from "./Header";
import MenuBar from "./MenuBar";

const Navbar = () => {
    return (
        <div className="fixed z-50 top-0 w-full ">
            <Header></Header>
            <MenuBar></MenuBar>
        </div>
    );
};

export default Navbar;