import { useEffect, useState } from "react";


const TextAnimation2 = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the number gradually until it reaches 250
            if (number < 10) {
                setNumber(prevNumber => prevNumber + 1);
            } else {
                clearInterval(interval);
            }
        }, 10);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(interval);
    }, [number]);
    return (
        <div className="animated-number flex-1 py-8 flex items-center flex-col">
            <div className="home-content">
                <div className="text-[#4B6FFF]">
                    <h3>{number}</h3>
                </div>
            </div>
            <h4 className="lg:text-xl font-semibold text-[#4B6FFF]">Our Clients</h4>
        </div>
    );
};

export default TextAnimation2;