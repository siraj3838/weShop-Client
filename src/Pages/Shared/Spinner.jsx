import './all.css'

const Spinner = () => {
    return (
        <div className='py-96'>
            <div className="loading-wrapper">
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