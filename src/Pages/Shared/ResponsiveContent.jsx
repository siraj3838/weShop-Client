import { TypeAnimation } from "react-type-animation";
import Spinner from "./Spinner";
import img from '../../assets/contentImg.png'
import img2 from '../../assets/contentImg2.png'
import img3 from '../../assets/contentImg3.png'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
import { motion } from "framer-motion";

const ResponsiveContent = () => {
    return (
        <div className="relative">
            <Spinner></Spinner>
            <div className="bg-white py-10 border-2 xl:pt-16 xl:[100px] 2xl:px-[200px] px-5">
                <div className="absolute xl:right-32 lg:right-14 lg:top-[460px] xl:top-1/4 md:block hidden md:top-[300px] md:right-7">
                    <img className="md:w-[120px] xl:w-3/4" src={down} alt="" />
                </div>
                <div className="absolute lg:left-14 lg:top-[500px] xl:left-32 xl:top-1/4 md:block hidden md:top-[340px] md:left-4">
                    <img className="md:w-[170px] xl:w-full" src={up} alt="" />
                </div>
                <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-500 mb-4 text-center pb-6 xl:pb-0 xl:mb-0">Our <span className=" bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text">
                    <TypeAnimation
                        sequence={[
                            'Recent Project', // Types 'One'
                            1000, // Waits 1s
                            'Current Project', // Deletes 'One' and types 'Two'
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
                <div className="flex flex-col md:flex-row items-center gap-10 py-6 md:py-0 lg:py-0 xl:py-16">
                    <div className="flex-1">
                        <img src={img2} alt="" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                        >
                            {/* main header */}
                            <div>
                                {/* heading */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >

                                    <div className="border-r border-b border-[#772EFA] pr-4 pb-4 lg:pr-6 lg:pb-6">
                                        <h3></h3>
                                        <h3 className='text-2xl lg:text-4xl font-bold pb-4 lg:pb-7 leading-tight'>Explore Our <span className='bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text'>Dynamic</span><br /> E-Commerce Platform</h3>
                                        <p className="text-sm lg:text-lg">It is an e-commerce website. You will get different mobiles in the project, you can see the details of the products and buy them and then you can share your opinion on those products. When you order to purchase, your order will be mailed by Admin and you will receive an order confirmation mail. Moreover, if you want, you can upload your product and sell it, but the condition is that you have to get permission from the admin.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                {/* <div className="divider"></div>  */}
                <div className="flex flex-col md:flex-row items-center gap-10 py-6 md:py-8 lg:py-8 xl:py-16">
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                        className="overflow-hidden"
                        >
                            {/* main header */}
                            <div>
                                {/* heading */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >

                                    <div className="border-l border-b border-[#772EFA] pr-4 pb-4 pl-4 lg:pl-6 lg:pb-6">
                                        <h3></h3>
                                        <h3 className='text-2xl lg:text-4xl font-bold pb-4 lg:pb-7 leading-tight'>Discover Our <span className='bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text'>Library</span><br />Management Project</h3>
                                        <p className="text-sm lg:text-lg">This is our Library Management Project, Dive into our extensive collection spanning four diverse categories, catering to every reader's taste and preference. Browse through our meticulously curated selection of books, conveniently organized by genre, author, and popularity. Whether you're seeking thrilling mysteries, captivating fiction, enlightening non-fiction, or educational resources, we have something for everyone.</p>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>

                    </div>
                    <div className="flex-1">
                        <img src={img} alt="" />
                    </div>
                </div>
                {/* <div className="divider"></div>  */}
                <div className="flex flex-col md:flex-row items-center gap-10 py-6 md:py-8 lg:py-8 xl:pt-16">
                    <div className="flex-1">
                        <img src={img3} alt="" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <motion.div
                        className="overflow-hidden"
                        >
                            {/* main header */}
                            <div>
                                {/* heading */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 2 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >

                                    <div className="border-r border-b border-[#772EFA] pr-4 pb-4 lg:pr-6 lg:pb-6">
                                        <h3></h3>
                                        <h3 className='text-2xl lg:text-4xl font-bold pb-4 lg:pb-7 leading-tight'><span className='bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text'>Dive Deep</span> Into Detailed<br />Product Delights!</h3>
                                        <p className="text-sm lg:text-lg">This is our Retail E-Commerce Project, where shopping meets convenience! Explore our platform featuring eight distinct categories of top brands, offering a wide array of products to suit every need and preference. Browse through our curated selection of products, meticulously categorized for easy navigation. From electronics and fashion to home goods and more, we have everything you need to elevate your lifestyle.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
                {/* <div className="divider"></div>  */}
            </div>
        </div>
    );
};

export default ResponsiveContent;