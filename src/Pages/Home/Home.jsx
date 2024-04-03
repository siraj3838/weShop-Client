import AboutContent from "../Shared/AboutContent";
import Banner from "../Shared/Banner";
import ContactUsMail from "../Shared/ContactUsMail";
import FlashSale from "../Shared/FlashSale";
// import OurActivities from "../Shared/OurActivities";
import ResponsiveContent from "../Shared/ResponsiveContent";
import SecondBanner from "../Shared/SecondBanner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutContent></AboutContent>
            <FlashSale></FlashSale>
            <SecondBanner></SecondBanner>
            <ResponsiveContent></ResponsiveContent>
            {/* <OurActivities></OurActivities> */}
            <ContactUsMail></ContactUsMail>
        </div>
    );
};

export default Home;