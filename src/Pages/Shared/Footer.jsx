import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png';
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import './all.css'

const Footer = () => {
    return (
        <div className="bg-[#dee4ff] py-6 px-5 xl:pt-16 xl:px-[100px]">
            {/* xl */}
            <div className="hidden xl:block">
                <div className="flex justify-between">
                    <div className="flex-1 flex flex-col items-center">
                        <Link to={'/'}>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img className='w-20' src={logo} alt="" />
                                <h3 className='text-4xl font-bold italic bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text pr-2'>weShop</h3>
                            </div>
                        </Link>
                        <p className="text-center">
                            Driven by your unwavering dedication to business growth, we bring to the table the invaluable experience and expertise needed to guarantee your success!
                        </p>
                    </div>
                    <div className="flex-1 -mr-40">
                        <h2 className="text-gray-500 text-xl text-center font-semibold">Our Menus</h2>
                        <div className="flex justify-center mt-4 mr-2">
                            <div className="">
                                <Link to={'/products'}><p className='text-lg mb-2 textBox'>Products</p></Link>
                                <Link to={'/aboutUs'}><p className='text-lg mb-2 textBox'>About Us</p></Link>
                                <Link to={'/contactUs'}><p className='text-lg mb-2 textBox'>Contact Us</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-gray-500 text-xl text-center font-semibold">Our Information</h2>
                        <div className="flex justify-center mt-4 mr-6">
                            <div className="xl:ml-44 space-y-1">
                                <div className='flex items-center gap-3'>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' href="tel:01741352039"><span className='text-xl'><IoIosCall /></span>+880-1741352039</a>
                                </div>
                                <div>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' href="mailto:sirajul.islam583853@gmail.com?body=My custom mail body"><span className='text-xl'><AiOutlineMail /></span> sirajul.islam583853@gmail.com</a>
                                </div>
                                <div>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' target='_blank' href="https://maps.app.goo.gl/AzSiz6LUVsPUsi377"><span className='text-xl mb-7'><FaLocationDot /></span> Bidyakut, Brahmanbaria, Bangladesh</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-gray-500 text-xl text-center font-semibold">Our Social</h2>
                        <div className="flex justify-center items-center gap-3 mt-4">
                            <a target="_blank" className='text-[#0A66C2] bg-white text-4xl' href="https://www.linkedin.com/in/sirajul-islam-41845a2a0/">
                                <ImLinkedin></ImLinkedin>
                            </a>
                            <a target="_blank" className='text-[#0866FF] bg-white text-4xl' href="https://www.facebook.com/WKmohammad.sakil">
                                <ImFacebook2></ImFacebook2>
                            </a>
                            <a target="_blank" className='text-black bg-white text-4xl rounded-full' href="https://github.com/siraj3838">
                                <SiGithub></SiGithub>
                            </a>
                            <a target="_blank" className='text-[#25D366] text-[40px] p-0' href="https://wa.me/01741352039" title="Share on whatsapp">
                                <IoLogoWhatsapp></IoLogoWhatsapp>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="xl:hidden block">
                <div className="">
                    <div className="flex flex-col items-center">
                        <Link to={'/'}>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img className='w-14' src={logo} alt="" />
                                <h3 className='text-3xl font-bold italic bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text pr-2'>weShop</h3>
                            </div>
                        </Link>
                        <p className="text-center">
                            Driven by your unwavering dedication to business growth, we bring to the table the invaluable experience and expertise needed to guarantee your success!
                        </p>
                    </div>
                    <div className="mt-4 text-left border-t-2 border-gray-500 pt-2">
                        <h2 className="text-gray-500 text-xl font-semibold mb-3">Our Menus</h2>
                        <div className="">
                            <div className="">
                                <Link to={'/products'}><p className='text-lg mb-2 textBox'>Products</p></Link>
                                <Link to={'/aboutUs'}><p className='text-lg mb-2 textBox'>About Us</p></Link>
                                <Link to={'/contactUs'}><p className='text-lg mb-2 textBox'>Contact Us</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-left border-t-2 border-gray-500 py-2">
                        <h2 className="text-gray-500 text-xl font-semibold">Our Information</h2>
                        <div className="flex mt-4 mr-6">
                            <div className="xl:ml-44 space-y-3">
                                <div className='flex items-center gap-3'>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' href="tel:01741352039"><span className='text-xl'><IoIosCall /></span>+880-1741352039</a>
                                </div>
                                <div>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' href="mailto:sirajul.islam583853@gmail.com?body=My custom mail body"><span className='text-xl'><AiOutlineMail /></span> sirajul.islam583853@gmail.com</a>
                                </div>
                                <div>
                                    <a className='text-lg flex items-center gap-3 hover:text-[#4B6FFF]' target='_blank' href="https://maps.app.goo.gl/AzSiz6LUVsPUsi377"><span className='text-xl mb-7 md:mb-0'><FaLocationDot /></span> Bidyakut, Brahmanbaria, Bangladesh</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-500 pt-2">
                        <h2 className="text-gray-500 text-xl text-left font-semibold">Our Social</h2>
                        <div className="flex justify-start items-center gap-3 mt-4">
                            <a target="_blank" className='text-[#0A66C2] bg-white text-4xl' href="https://www.linkedin.com/in/sirajul-islam-41845a2a0/">
                                <ImLinkedin></ImLinkedin>
                            </a>
                            <a target="_blank" className='text-[#0866FF] bg-white text-4xl' href="https://www.facebook.com/WKmohammad.sakil">
                                <ImFacebook2></ImFacebook2>
                            </a>
                            <a target="_blank" className='text-black bg-white text-4xl rounded-full' href="https://github.com/siraj3838">
                                <SiGithub></SiGithub>
                            </a>
                            <a target="_blank" className='text-[#25D366] text-[40px] p-0' href="https://wa.me/01741352039" title="Share on whatsapp">
                                <IoLogoWhatsapp></IoLogoWhatsapp>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="border-t-2 border-gray-300 pt-3 mt-4 text-center text-gray-400">
                <p>Copyright © 2024 - All right reserved by weShop</p>
            </div>
        </div>
    );
};

export default Footer;