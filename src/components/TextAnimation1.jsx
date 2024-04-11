import { useEffect, useState } from "react";

const TextAnimation1 = () => {
    const [number, setNumber] = useState(0);
    const targetNumber = 27;
    const totalDuration = 2000; // Total duration in milliseconds
    const intervalCount = targetNumber + 1; // Number of intervals needed to reach the target number
    const intervalDuration = totalDuration / intervalCount; // Duration of each interval in milliseconds

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the number gradually until it reaches the target number
            if (number < targetNumber) {
                setNumber(prevNumber => prevNumber + 1);
            } else {
                clearInterval(interval);
            }
        }, intervalDuration);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(interval);
    }, [number, targetNumber, intervalDuration]);

    return (
        <div className="animated-number flex-1 py-8 border-t border-[#772EFA] border-l flex items-center flex-col">
            <div className="home-content">
                <div className="text-animate">
                    <h3>{number}</h3>
                </div>
            </div>
            <h4 className="lg:text-xl font-semibold text-[#4B6FFF]">Our Projects</h4>
        </div>
    );
};

export default TextAnimation1;
