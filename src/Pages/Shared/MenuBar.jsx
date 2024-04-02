
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { BiUser } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navList = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4B6FFF] text-xl font-semibold hover:scale-110 transition-all" : "text-xl font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4B6FFF] text-xl font-semibold hover:scale-110 transition-all" : "text-xl font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
            }
        >
            Products
        </NavLink>
        <NavLink
            to="/aboutUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4B6FFF] text-xl font-semibold hover:scale-110 transition-all" : "text-xl font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
            }
        >
            About Us
        </NavLink>
        <NavLink
            to="/contactUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4B6FFF] text-xl font-semibold hover:scale-110 transition-all" : "text-xl font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
            }
        >
            Contact Us
        </NavLink>
    </>

    return (
        <>
            {/* lg */}
            <div className='w-full px-[100px] py-2 bg-[#dee4ff] hidden lg:block'>
                <div className="flex justify-between items-center">
                    <div className='flex-1'>
                        <Link to={'/'}>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <img className='w-20' src={logo} alt="" />
                                <h3 className='text-4xl font-bold italic bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text pr-2'>weShop</h3>
                            </div>
                        </Link>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between items-center'>
                            {navList}
                        </div>
                    </div>
                    <div className='xl:flex-1'>
                        <div className='flex items-center justify-end gap-5 text-4xl pr-2'>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#4B6FFF] font-semibold hover:scale-110 transition-all" : "font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
                                }
                            >
                                <BiUser></BiUser>
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#4B6FFF] font-semibold hover:scale-110 transition-all" : "font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
                                }
                            >
                                <IoBagHandleOutline></IoBagHandleOutline>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className='px-5 py-2 bg-[#dee4ff] block lg:hidden'>
                <div className="flex justify-between items-center">
                    <div>
                        <p onClick={() => setIsOpen(!isOpen)} className='text-3xl'>
                            {
                                isOpen ? <HiOutlineMenuAlt3 />
                                    :
                                    <HiOutlineMenuAlt2 />
                            }
                        </p>
                    </div>
                    <div className='flex-1 flex justify-center items-center gap-1'>
                        <img className='w-11' src={logo} alt="" />
                        <h3 className='text-2xl font-bold italic bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text pr-2'>weShop</h3>
                    </div>
                    <div className=''>
                        <div className='flex items-center justify-end gap-5 text-3xl pr-2'>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#4B6FFF] font-semibold hover:scale-110 transition-all" : "font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
                                }
                            >
                                <BiUser></BiUser>
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#4B6FFF] font-semibold hover:scale-110 transition-all" : "font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
                                }
                            >
                                <IoBagHandleOutline></IoBagHandleOutline>
                            </NavLink>
                        </div>
                    </div>
                    {/* <div className='flex-1 flex items-center gap-1'>
                        <img className='w-20' src={logo} alt="" />
                        <h3 className='text-4xl font-bold italic bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text pr-2'>weShop</h3>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between items-center'>
                            {navList}
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center justify-end gap-5 text-4xl pr-2'>
                            <NavLink
                                to="/contactUs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#4B6FFF] font-semibold hover:scale-110 transition-all" : "font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
                                }
                            >
                                <BiUser></BiUser>
                            </NavLink>
                            <NavLink
                                to="/contactUs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#4B6FFF] font-semibold hover:scale-110 transition-all" : "font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
                                }
                            >
                                <IoBagHandleOutline></IoBagHandleOutline>
                            </NavLink>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='lg:hidden'>
                {
                    isOpen && <ul tabIndex={0} className="menu menu-sm dropdown-content z-50 p-4 shadow bg-base-100 rounded-box w-2/4 md:w-2/6 space-y-3">
                        {navList}
                    </ul>
                }
            </div>
        </>
    );
};

export default MenuBar;