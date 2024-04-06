import { RiMessage3Line } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import ContactUsForm from "../../components/ContactUsForm";
import logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div className="pt-6 md:pt-0">
            {/* Top Section */}
            <div className="bg-[#4392fa] py-8 md:py-16">
                <h3 className="text-3xl md:text-4xl font-bold text-[#e9e9e9] text-center mb-8">Get In Touch</h3>
                {/* Content Main */}
                <div className="flex flex-col md:flex-row justify-between items-center lg:py-16 xl:[100px] 2xl:px-[400px] px-5 w-full gap-6 md:gap-0">
                    {/* item-1 */}
                    <div className="">
                        {/* icon */}
                        <div className="flex justify-center md:justify-start">
                            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#80b2f3] mb-4">
                                <p className="text-5xl text-[#e9e9e9]">
                                    <IoLocationOutline></IoLocationOutline>
                                </p>
                            </div>
                        </div>
                        <div className="text-[#e9e9e9] text-center md:text-left">
                            <h4 className="text-2xl font-semibold">Address</h4>
                            {/* Information-1*/}
                            <div className="text-sm text-center md:text-left space-y-1 mt-3">
                                <h6 className="text-lg font-semibold">Present Address</h6>
                                <p>Banasree G-Block</p>
                                <p>Rampura, Dhaka 1219</p>
                            </div>
                            {/* Information-2*/}
                            <div className="text-sm text-center md:text-left space-y-1 mt-3">
                                <h6 className="text-lg font-semibold">Permanent Address</h6>
                                <p>Bidyakut, Nabinagar</p>
                                <p>Brahmanbaria, Chittagong 3400</p>
                            </div>
                        </div>
                    </div>
                    {/* item-2 */}
                    <div>
                        {/* icon */}
                        <div className="flex justify-center md:justify-start">
                            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#80b2f3] mb-4">
                                <p className="text-4xl text-[#e9e9e9]">
                                    <LuPhone></LuPhone>
                                </p>
                            </div>
                        </div>
                        <div className="text-[#e9e9e9] text-center md:text-left">
                            <h4 className="text-2xl font-semibold">Phone</h4>
                            {/* Information-1*/}
                            <div className="text-sm text-center md:text-left space-y-1 mt-3">
                                <h6 className="text-lg font-semibold">Phone Number</h6>
                                <p>+880-1741352039</p>
                                <p>+880-1731638404</p>
                            </div>
                            {/* Information-2*/}
                            <div className="text-sm text-center md:text-left space-y-1 mt-3">
                                <h6 className="text-lg font-semibold">Online Number</h6>
                                <p>+880-1741352039</p>
                                <p>+880-1741352039</p>
                            </div>
                        </div>
                    </div>
                    {/* item-3 */}
                    <div>
                        {/* icon */}
                        <div className="flex justify-center md:justify-start">
                            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#80b2f3] mb-4">
                                <p className="text-5xl text-[#e9e9e9]">
                                    <RiMessage3Line></RiMessage3Line>
                                </p>
                            </div>
                        </div>
                        <div className="text-[#e9e9e9] text-center md:text-left">
                            <h4 className="text-2xl font-semibold">Email</h4>
                            {/* Information-1*/}
                            <div className="text-sm text-center md:text-left space-y-1 mt-3">
                                <h6 className="text-lg font-semibold">Business Mail</h6>
                                <p>sirajul.islam583853@gmail.com</p>
                                <p>kanchanmiah4605@gmail.com</p>
                            </div>
                            {/* Information-2*/}
                            <div className="text-sm text-center md:text-left space-y-1 mt-3">
                                <h6 className="text-lg font-semibold">Personal Mail</h6>
                                <p>siraj457689@gmail.com</p>
                                <p>siraj3838@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Message Section */}
            <div className="lg:py-16 xl:[100px] 2xl:px-[400px] px-5 w-full">
                {/* main div */}
                <div className="flex flex-col md:flex-row items-center py-8 gap-4 md:gap-3 xl:gap-8">
                    <div className="flex-1">
                        <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#5265FE] md:text-left text-center">Message US</h3>
                        <p className="md:pb-5 py-5">If you have any questions regarding our services, partnerships, or anything else related to weShop, don't hesitate to get in touch. Our dedicated team looks forward to assisting you!</p>
                        <Link to={'/'}>
                            <div className='flex items-center gap-1 cursor-pointer justify-center md:justify-start'>
                                <img className='w-20' src={logo} alt="" />
                                <h3 className='text-4xl font-bold italic bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text pr-2'>weShop</h3>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="border p-5 bg-blue-300 rounded-md">
                        <ContactUsForm></ContactUsForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;