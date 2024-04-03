// import { useEffect, useState } from "react";
// import { TypeAnimation } from "react-type-animation";
// import './all.css'

// const OurActivities = () => {
//     const [number, setNumber] = useState(0);
//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Increment the number gradually until it reaches 250
//             if (number < 250) {
//                 setNumber(prevNumber => prevNumber + 1);
//             } else {
//                 clearInterval(interval);
//             }
//         }, 10);

//         // Cleanup function to clear the interval when component unmounts
//         return () => clearInterval(interval);
//     }, [number]);
//     return (
//         <div>
//             <div className="xl:py-16 xl:[100px] 2xl:px-[200px] bg-[#fff] px-5">
//                 <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-500 text-center">Our <span className=" bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text">
//                     <TypeAnimation
//                         sequence={[
//                             'Activities', // Types 'One'
//                             1000, // Waits 1s
//                             '', // Deletes 'One' and types 'Two'
//                             200, // Waits 2s
//                             () => {
//                                 console.log('Sequence completed');
//                             },
//                         ]}
//                         wrapper="span"
//                         cursor={true}
//                         repeat={Infinity}
//                         style={{ display: 'inline-block' }}
//                     />
//                 </span></h2>
//                 <div className="animated-number">
                   
//                     <div className="home-content">
//                         <div className="text-animate">
//                             <h3>{number}</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurActivities;