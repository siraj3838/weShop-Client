import AboutContent from "../Shared/AboutContent";
import Banner from "../Shared/Banner";
import CustomerNumber from "../Shared/CustomerNumber";
import FlashSale from "../Shared/FlashSale";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CustomerNumber></CustomerNumber>
            <AboutContent></AboutContent>
            <FlashSale></FlashSale>
        </div>
    );
};

export default Home;