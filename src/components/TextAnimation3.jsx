import { useEffect, useState } from "react";
import useAllUsers from "../Hook/useAllUsers";


const TextAnimation3 = () => {
    const [number, setNumber] = useState(0);
    const [users] = useAllUsers();
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the number gradually until it reaches 250
            if (number < users?.length) {
                setNumber(prevNumber => prevNumber + 1);
            } else {
                clearInterval(interval);
            }
        }, 10);

        // Cleanup function to clear the interval when component unmount
        return () => clearInterval(interval);
    }, [number, users?.length]);
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