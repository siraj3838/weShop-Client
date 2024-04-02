import { TypeAnimation } from "react-type-animation";

const AboutContent = () => {
    return (
        <>
            {/* xl */}
            <div className="text-center xl:py-16 xl:px-[100px] hidden xl:block bg-[#f9f9f9]">
                <h2 className="xl:text-5xl font-bold text-gray-500 mb-4">Shop <span className=" bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text">
                    <TypeAnimation
                        sequence={[
                            'Smart', // Types 'One'
                            1000, // Waits 1s
                            'weShop', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </span></h2>

                <p className="">Welcome to WeShop, your ultimate destination for a seamless and personalized shopping experience. At WeShop, we are committed to revolutionizing the way you shop, offering convenience, choice, and innovation all in one place.Our mission at WeShop is simple: to empower shoppers like you by providing a curated selection of products, tailored recommendations, and exceptional customer service. We believe in making shopping more than just a transaction; it's an experience, and we're here to make it enjoyable and effortless. With WeShop, you can explore a diverse range of high-quality products from leading brands, discover unique items you won't find anywhere else, and enjoy peace of mind knowing that every purchase is backed by our dedication to your satisfaction.</p>
            </div>
            {/* mobile */}
            <div className="text-center py-8 block xl:hidden bg-[#f9f9f9]">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-500 mb-4">Shop <span className=" bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text">
                    <TypeAnimation
                        sequence={[
                            'Smart', // Types 'One'
                            1000, // Waits 1s
                            'weShop', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </span></h2>
                <p className="px-5 text-sm">Welcome to WeShop, your ultimate destination for a seamless and personalized shopping experience. At WeShop, we are committed to revolutionizing the way you shop.</p>
            </div>
        </>
    );
};

export default AboutContent;