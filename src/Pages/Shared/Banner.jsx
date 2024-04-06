



import mobile from '../../assets/mobile.png'
import phone from '../../assets/phone1.png'
import phone2 from '../../assets/phone2.png'
import phone3 from '../../assets/phone3.png'
import phone4 from '../../assets/phone4.png'
import phone5 from '../../assets/phone5.png'
import phone6 from '../../assets/phone6.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const Banner = () => {
    return (
        <div>
            <div className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
                {/* image */}
                <motion.div
                    className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 md:py-10 lg:pb-12'
                >
                    {/* main header */}
                    <div className='z-10 md:mt-32 md:basis-3/5'>
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
                            className='md:-mt-20'>
                            <div className='relative'>
                                <div className='before:absolute before:-top-24 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                                    <h3 className='text-5xl font-extrabold'>weShop</h3>
                                </div>
                            </div>
                            <p className='mt-8 text-sm'>
                                At Somykoron E-Commerce, we believe in providing more than just products; we deliver exceptional experiences. Join our community of satisfied shoppers today and unlock a world of endless possibilities!
                            </p>
                        </motion.div>
                        {/* Action    */}
                        <motion.div className='mt-8 flex items-center gap-8 md:justify-start'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <Link>
                                <button className="rounded-md bg-[#6B3FFB] hover:bg-[#603ecd] lg:px-10 lg:py-2 text-white hover:text-white md:py-2 px-5 py-1">
                                    Join Now
                                </button>
                            </Link>
                            <p>Learn More</p>
                        </motion.div>
                    </div>
                    {/* image */}
                    <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                        <img src={mobile} alt="mobile" />
                    </div>
                </motion.div>

                {/* sponsor */}

                <div className='w-full bg-primary-100 py-10'>
                    <div className='mx-auto md:w-5/6'>
                        <div className='md:flex grid grid-cols-3 md:w-3/5 items-center justify-between gap-3 md:gap-5 lg:gap-8'>
                            <div className='flex justify-center items-center'>
                                <img className='lg:w-32 lg:h-14 md:w-20 md:h-10 w-[94px] h-10' src={phone} alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='lg:w-32 lg:h-14 md:w-20 md:h-10 w-[94px] h-10' src={phone2} alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='lg:w-32 lg:h-14 md:w-20 md:h-10 w-[94px] h-10' src={phone3} alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='lg:w-32 lg:h-14 md:w-20 md:h-10 w-[94px] h-10' src={phone4} alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='lg:w-32 lg:h-14 md:w-20 md:h-10 w-[94px] h-10' src={phone5} alt="" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='lg:w-32 lg:h-14 md:w-20 md:h-10 w-[94px] h-10' src={phone6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;