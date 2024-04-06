
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { BiUser } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import useProfile from '../../Hook/useProfile';
import { MdClose } from "react-icons/md";
import useCart from '../../Hook/useCart';

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { user, logOutUser } = useContext(AuthContext);
    const [currentUser] = useProfile();
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [carts] = useCart()
    // console.log(carts);
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
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success('Logout Successfully')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <>
            {/* lg */}
            <div className='w-full px-5 2xl:px-[100px] py-2 bg-[#dee4ff] hidden lg:block'>
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
                            {
                                user ? <>
                                    <div className="dropdown dropdown-end mt-2">
                                        <div onClick={() => setOpenMenu(!openMenu)} tabIndex={0} role="button" className="avatar online">
                                            <div className="w-12 h-12 rounded-full">
                                                <div className=""></div>
                                                <img className='skeleton w-12 h-12 rounded-full shrink-0' src={currentUser?.photoURL} alt="" />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className={`${openMenu ? 'mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 block' : 'mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 hidden'}`}>
                                            <li>
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li onClick={handleLogout}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </>
                                    :
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#4B6FFF] font-semibold hover:scale-110 transition-all" : "font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
                                        }
                                    >
                                        <BiUser></BiUser>
                                    </NavLink>
                            }
                            <p
                                className="font-semibold duration-500 text-[#4B6FFF] hover:scale-110 transition-all hover:text-[#4B6FFF] relative"
                            >
                                <IoBagHandleOutline className='text-4xl text-gray-500' onClick={() => setIsMenuToggled(!isMenuToggled)}></IoBagHandleOutline>
                                <span className='absolute text-base top-0 -right-6'>+{carts?.length}</span>
                            </p>
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
                            {
                                user ? <>
                                    <div className="dropdown dropdown-end mt-2">
                                        <div onClick={() => setOpenMenu(!openMenu)} tabIndex={0} role="button" className="avatar online">
                                            <div className="w-12 h-12 rounded-full">
                                                <div className=""></div>
                                                <img className='skeleton w-12 h-12 rounded-full shrink-0' src={currentUser?.photoURL} alt="" />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className={`${openMenu ? 'mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 block' : 'mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 hidden'}`}>
                                            <li>
                                                <a className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </a>
                                            </li>
                                            <li><a>Settings</a></li>
                                            <li onClick={handleLogout}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </>
                                    :
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#4B6FFF] font-semibold hover:scale-110 transition-all" : "font-semibold duration-500 text-gray-500 hover:scale-110 transition-all hover:text-[#4B6FFF]"
                                        }
                                    >
                                        <BiUser></BiUser>
                                    </NavLink>
                            }
                             <p
                                className="font-semibold duration-500 text-[#4B6FFF] hover:scale-110 transition-all hover:text-[#4B6FFF] relative"
                            >
                                <IoBagHandleOutline className='text-4xl text-gray-500' onClick={() => setIsMenuToggled(!isMenuToggled)}></IoBagHandleOutline>
                                <span className='absolute text-base top-0 -right-6'>+{carts?.length}</span>
                            </p>
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
            <div className={`fixed top-[120px] md:top-[136px] lg:top-[140px] 2xl:top-[141px] right-0 bottom-0 z-40 h-full w-[300px] md:w-[400px] xl:w-[500px] bg-[#4392FA] drop-shadow-xl ${isMenuToggled ? '' : 'hidden'}`}>
                {/* close icon */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <MdClose className="h-6 w-6 text-gray-200"></MdClose>
                    </button>
                </div>
                {/* menu */}
                <div className={`flex flex-col ml-[33%] gap-10 text-2xl text-white list-none`}>
                    {
                        carts ? <>
                        {
                            carts?.map(cart => <div key={cart?._id}>
                                <h3>{cart?.title}</h3>
                            </div>)
                        }
                        </>
                        :
                        ''
                    }
                </div>
            </div>
        </>
    );
};

export default MenuBar;