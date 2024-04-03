import './all.css'

const Spinner = () => {
    return (
        <div className='xl:h-[650px] xl:py-16 xl:[100px] 2xl:px-[200px] bg-[#E3EEF8] flex justify-around items-center flex-col md:flex-row gap-10 md:gap-0 py-10 mt-8 lg:mt-0 px-5'>
            <div className='flex-1'>
                <h3 className='text-xl lg:text-4xl font-bold pb-4 lg:pb-7 leading-tight text-center lg:text-left'>Your Premier Destination <br /> For <span className='bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text'>Smartphones!</span></h3>
                <p className='lg:pr-20 flex flex-col gap-2 lg:gap-3 text-sm lg:text-lg text-center lg:text-left'>
                    At WeShop, we specialize in delivering unparalleled mobile experiences tailored to your lifestyle. Dive into our exclusive collection of the latest smartphones, meticulously curated to meet your every need and desire.
                    <br />
                    <span>Discover the pinnacle of technological innovation with our diverse range of mobile devices, featuring cutting-edge designs, powerful performance, and seamless connectivity. Whether you're a tech enthusiast, a savvy professional, or a casual user, WeShop offers the perfect smartphone to match your unique preferences.</span>
                </p>
            </div>
            <div className="loading-wrapper flex-1">
                <section className="container">
                    <div className="cube rotate">
                        <div className="front bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">W</div>
                        <div className="back bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">H</div>
                        <div className="right bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">E</div>
                        <div className="left bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">O</div>
                        <div className="top bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">S</div>
                        <div className="bottom bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">P</div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Spinner;