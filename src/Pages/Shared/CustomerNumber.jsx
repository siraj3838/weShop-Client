import { useEffect, useRef, useState } from "react";

const CustomerNumber = () => {
    // const elementRef = useRef(null);

    // // On component mount, animate the element
    // useEffect(() => {
    //     if (!elementRef.current) return;

    //     const element = elementRef.current;
    //     const fromValue = parseFloat(element.getAttribute('data-from-value'));
    //     const toValue = parseFloat(element.getAttribute('data-to-value'));
    //     const duration = parseInt(element.getAttribute('data-duration'));

    //     // Simple animation example: changing font size
    //     const startTime = performance.now();
    //     const animate = (timestamp) => {
    //         const progress = timestamp - startTime;
    //         const percentage = Math.min(progress / duration, 1); // Ensure animation ends after duration
    //         const animatedValue = fromValue + (toValue - fromValue) * percentage;
    //         element.style.fontSize = `${animatedValue}px`;

    //         if (progress < duration) {
    //             requestAnimationFrame(animate);
    //         }
    //     };

    //     requestAnimationFrame(animate);
    // }, []);


    // second
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the number gradually until it reaches 250
            if (number < 250) {
                setNumber(prevNumber => prevNumber + 1);
            } else {
                clearInterval(interval);
            }
        }, 10);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(interval);
    }, [number]); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div>
            {/* <div
                ref={elementRef}
                className="animated-element"
                data-from-value="16"
                data-to-value="40"
                data-duration="2000">
                This element will be animated.
            </div> */}
            <div className="animated-number">
                {number}
            </div>
        </div>
    );
};

export default CustomerNumber;