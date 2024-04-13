import { useState } from 'react';
import aboutImg from '../../assets/aboutImg.png'
import { motion } from 'framer-motion';

const AboutUs = () => {
    const [textOpen, setTextOpen] = useState(false);
    return (
        <div className="xl:py-16 xl:px-[170px] px-5 w-full pt-16 pb-8  md:pt-0">
            {/* main div */}
            <div className="flex items-center flex-col-reverse md:flex-row gap-5 md:gap-0">
                {/* Content */}
                <div className="flex-1 flex justify-center">
                    <div className='overflow-hidden'>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#5265FE] md:text-left text-center">About Us</h3>
                        <motion.div
                        >
                            {/* main header */}
                            <div>
                                {/* heading */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >

                                    <p className='py-5 xl:pr-20 text-center md:text-left'>
                                        At weShop, we understand that every customer is unique, which is why we're committed to providing personalized shopping experiences tailored to your preferences. Our team of experts is constantly working to enhance our platform, introducing innovative features and technologies to make your shopping journey more enjoyable and efficient.
                                    </p>
                                </motion.div>
                                {/* Action    */}
                                <motion.div className=''
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <div className={`${textOpen ? 'hidden md:block' : ''} flex justify-center md:justify-start`}>
                                        <button onClick={() => setTextOpen(!textOpen)} className='bg-[#6B3FFB] hover:bg-[#603ecd] text-white py-2 px-5'>Learn More</button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Image */}
                <div className="flex-1 flex justify-end">
                    <img src={aboutImg} alt="" />
                </div>
            </div>

            <div className={`${textOpen ? 'block' : 'hidden'} overflow-hidden`}>
                <div className="divider"></div>
                <motion.div
                className='overflow-hidden'
                >
                    {/* main header */}
                    <div>
                        {/* heading */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >

                            <p className='text-center md:text-left'>
                                Introducing our latest mobile innovation, designed to elevate your mobile experience. Seamlessly blending style and functionality, our mobile phone is a true game-changer. Experience the power of connectivity in the palm of your hand with our cutting-edge mobile device. Stay connected, productive, and entertained wherever you go with our feature-packed mobile phone. Discover the ultimate combination of performance, design, and reliability in our sleek mobile device. Elevate your communication with crystal-clear voice calls and lightning-fast data speeds on our mobile phone. Immerse yourself in stunning visuals and vibrant colors with the high-resolution display of our mobile device. Capture every moment in stunning detail with the advanced camera technology of our mobile phone. Experience lightning-fast responsiveness and smooth multitasking with the powerful processor of our mobile device. Keep your digital life organized and secure with the intuitive user interface of our mobile phone. Say goodbye to battery anxiety with the long-lasting battery life of our mobile device. Stay entertained on the go with access to millions of apps, games, and multimedia content on our mobile phone. Stream your favorite movies, TV shows, and music with ease on the expansive screen of our mobile device. Unlock new possibilities with the innovative features and functionalities of our mobile phone. Stay ahead of the curve with regular software updates and enhancements for our mobile device. Experience unparalleled speed and performance with the latest 5G connectivity on our mobile phone. Capture breathtaking landscapes and stunning portraits with the versatile camera system of our mobile device. Keep your personal information safe and secure with advanced biometric authentication features on our mobile phone. Say goodbye to cluttered home screens and app drawers with the streamlined interface of our mobile device. Enjoy seamless integration with your favorite apps and services for a truly personalized experience on our mobile phone. Navigate with confidence using advanced GPS and mapping features on our mobile device. Customize your device to suit your unique style with a wide range of colors and finishes available for our mobile phone. Share your favorite moments with friends and family instantly using the social media integration of our mobile device. Experience the future of mobile gaming with smooth graphics and immersive sound on our mobile phone. Stay productive on the go with powerful productivity tools and apps pre-installed on our mobile device. Simplify your life with voice commands and virtual assistants available on our mobile phone. Stay organized and on schedule with calendar, reminder, and note-taking apps on our mobile device. Experience true wireless freedom with Bluetooth connectivity for headphones, speakers, and other accessories on our mobile phone. Keep your device running smoothly with efficient memory management and optimization features on our mobile device. Protect your eyes from strain with customizable display settings and blue light filter technology on our mobile phone. Enjoy peace of mind with robust security features and regular security updates for our mobile device. Say goodbye to tangled cords and cables with wireless charging capabilities on our mobile phone. Discover new adventures and explore the world around you with augmented reality features on our mobile device. Access your files and documents from anywhere with cloud storage integration on our mobile phone. Stay connected with loved ones through high-quality video calls and messaging apps on our mobile device. Capture stunning selfies and group photos with the front-facing camera of our mobile phone. Preserve your memories for years to come with 4K video recording capabilities on our mobile device. Keep your device safe from drops and accidents with durable construction and rugged design of our mobile phone. Say hello to faster downloads and smoother streaming with Wi-Fi 6 connectivity on our mobile device. Experience immersive sound quality with stereo speakers and Dolby Atmos technology on our mobile phone. Enjoy all-day comfort and convenience with the ergonomic design and lightweight construction of our mobile device. Say goodbye to missed calls and messages with customizable notifications and alerts on our mobile phone. Stay in control of your privacy with granular app permissions and privacy settings on our mobile device. Stay productive on the go with multitasking features like split-screen and floating apps on our mobile phone. Make a statement with the sleek and stylish design of our mobile device, available in a range of eye-catching colors. Stay organized and on top of your schedule with intuitive calendar and reminder features on our mobile phone. Elevate your mobile photography with advanced camera modes and manual controls on our mobile device. Say goodbye to slow downloads and buffering with fast and reliable 4G LTE connectivity on our mobile phone. Keep your device running smoothly with regular software updates and performance optimizations for our mobile device. Experience the thrill of mobile gaming with responsive controls and stunning graphics on our mobile phone. Stay connected with friends and family across the globe with international calling and messaging features on our mobile device. Keep your personal information safe and secure with biometric authentication options like fingerprint and facial recognition on our mobile phone. Experience true wireless freedom with Bluetooth 5.0 connectivity for headphones, speakers, and other accessories on our mobile device. Stay entertained on the go with access to millions of songs, podcasts, and audiobooks on our mobile phone. Say goodbye to low battery anxiety with the long-lasting battery life of our mobile device. Capture every detail with the high-resolution camera of our mobile phone, perfect for photography enthusiasts. Stay productive wherever you go with seamless integration with productivity apps like Microsoft Office on our mobile device. Enjoy peace of mind with regular security updates and robust security features on our mobile phone. Say hello to faster downloads and seamless streaming with the latest Wi-Fi technology on our mobile device. Keep your device running smoothly with efficient memory management and optimization features on our mobile phone. Stay organized and on schedule with calendar, reminder, and note-taking apps pre-installed on our mobile device. Simplify your life with voice commands and virtual assistants like Siri or Google Assistant on our mobile phone. Stay connected with lightning-fast 5G connectivity on our mobile device, perfect for streaming, gaming, and more. Capture stunning photos and videos in any lighting conditions with the advanced camera technology of our mobile phone. Experience immersive sound quality with stereo speakers and Dolby Atmos technology on our mobile device. Stay entertained on the go with access to your favorite movies, TV shows, and music streaming services on our mobile phone. Keep your device protected from drops and accidents with durable construction and rugged design of our mobile device. Say goodbye to tangled cords and cables with wireless charging capabilities on our mobile phone. Experience the future of mobile gaming with smooth graphics and responsive controls on our mobile device. Stay connected with friends and family through high-quality video calls and messaging apps on our mobile phone. Keep your device running smoothly with regular software updates and performance optimizations on our mobile device. Say hello to faster downloads and seamless streaming with 5G connectivity on our mobile phone. Preserve your memories in stunning detail with 4K video recording capabilities on our mobile device. Stay organized and on top of your schedule with intuitive calendar and reminder features on our mobile phone. Elevate your mobile photography with advanced camera modes and manual controls on our mobile device.
                            </p>
                        </motion.div>

                    </div>
                </motion.div>

            </div>


        </div>
    );
};

export default AboutUs;