import { useEffect, useState } from "react";
import useAllUsers from "../Hook/useAllUsers";

const TextAnimation3 = () => {
    const [number, setNumber] = useState(0);
    const [users] = useAllUsers();
    const totalDuration = 2000; // Total duration in milliseconds
    const intervalCount = users ? users.length + 1 : 1; // Number of intervals needed to reach the target number
    const intervalDuration = totalDuration / intervalCount; // Duration of each interval in milliseconds

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the number gradually until it reaches the number of users
            if (number < (users ? users.length : 0)) {
                setNumber(prevNumber => prevNumber + 1);
            } else {
                clearInterval(interval);
            }
        }, intervalDuration);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(interval);
    }, [number, users, intervalDuration]);

    return (
        <div className="animated-number flex-1 py-8 border-r border-[#772EFA] border-b flex items-center flex-col">
            <div className="home-content">
                <div className="text-animate">
                    <h3>{number}</h3>
                </div>
            </div>
            <h4 className="lg:text-xl font-semibold text-[#4B6FFF]">Our Users</h4>
        </div>
    );
};

export default TextAnimation3;
