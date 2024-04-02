import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <div className="bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] h-10 md:h-14 md:px-[110px] px-6">
            <Marquee>
                <div className="flex items-center gap-[32px] text-white h-10 md:h-14 text-base md:text-lg font-medium">
                    <p>Welcome to weShop. Your Ultimate Shopping Destination!</p>
                    <p>|</p>
                    <p>Your Ticket to Seamless Shopping Bliss Starts Now!</p>
                    <p>|</p>
                    <p>Let's Embark on a Journey of Retail Discovery Together!</p>
                    <p>|</p>
                </div>
            </Marquee>
        </div>
    );
};

export default Header;