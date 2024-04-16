
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { BiUser } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import useProfile from '../../Hook/useProfile';
import { MdClose } from "react-icons/md";
import useCart from '../../Hook/useCart';
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from '../../Hook/useAxios';
import { TfiClose } from "react-icons/tfi";
import emailjs from '@emailjs/browser';
import bkash from '../../assets/bkash.png'
import nogot from '../../assets/nogot.png'
import useAdmin from '../../Hook/useAdmin';
import useAdminOrder from '../../Hook/useAdminOrder';
import orderImg from '../../assets/orderImg.png'

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { user, logOutUser, isMenuToggled, setIsMenuToggled } = useContext(AuthContext);
    const [currentUser] = useProfile();
    const [carts, refetch] = useCart()
    const [quantity, setQuantity] = useState()
    const [totalCost, setTotalCost] = useState(0)
    const myAxios = useAxios();
    const order = "pending";
    const form = useRef();
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [orders] = useAdminOrder();
    // console.log(isAdmin);
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
                penOrders
                toast.success('Logout Successfully')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    useEffect(() => {
        const quantity2 = carts.reduce((pre, cur) => pre + cur.totalProduct, 0)
        const cost = carts.reduce((pre, cur) => pre + cur.totalPrice, 0)
        setQuantity(quantity2)
        setTotalCost(cost);
    }, [carts])
    // console.log(quantity);
    // console.log(totalCost);


    const handleRemoved = (id) => {
        // console.log(id);
        myAxios.delete(`/cartsUser/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success('Removed Done')
                    refetch();
                }
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleOrderNow = async (e) => {
        e.preventDefault();

        const formData = e.target;
        const email = formData.email.value;
        const name = formData.name.value;
        const phone = formData.phone.value;
        const message = formData.message.value;
        const address = formData.address.value;
        const lastNumber = formData.lastNumber.value;
        const transactionId = formData.transactionId.value;
        const date = new Date();
        // Combine form data with other information
        const totalCostReal = totalCost + (quantity * 60);


        const payment = {
            cartId: carts?.map(item => item._id),
            itemId: carts?.map(item => item.itemId),
            totalCost: parseInt(totalCostReal?.toFixed(2)),
            carts: carts,
            orderEmail: email,
            orderName: name,
            message: message,
            number: phone,
            address: address,
            order,
            lastNumber,
            transactionId,
            date
        }
        // console.log(payment);
        const res = await myAxios.post('/orders', payment)
        // console.log(res.data);
        refetch();
        if (res.data.deleteResult.deletedCount > 0) {
            // console.log(res.data);
            emailjs.sendForm('service_vvlritg', 'template_lbadt6z', form.current, '9iRzmO_mGC1PX15jm')
                .then((result) => {
                    // console.log(result.text);
                    // console.log(form);
                    toast.success('Thank You For order')
                    // setIsMenuToggled(false)
                    navigate('/paymentHistory')
                }, (error) => {
                    console.log(error);
                });
        }

    }
    const totalOrderCost = orders.reduce((accumulator, currentValue) => accumulator + currentValue.totalCost,
        0)
    const [penOrders, setPenOrders] = useState([]);
    useEffect(() => {
        const pendingOrders = orders.filter(order => order.order == 'pending')
        setPenOrders(pendingOrders);
    }, [orders])
    // console.log(orders);
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
                                            {isAdmin ? <li>
                                                <Link to={'/uploadProducts'}>Upload Products</Link>
                                            </li>
                                                :
                                                ''
                                            }
                                            {isAdmin ? <li>
                                                <Link to={'/adminPaymentHistory'}>Payment History</Link>
                                            </li>
                                                :
                                                ''
                                            }
                                            {user & !isAdmin ? <li>
                                                <Link to={'/paymentHistory'}>Payment History</Link>
                                            </li>
                                                :
                                                <li>
                                                    <a>Payment History</a>
                                                </li>
                                            }
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
                                <span className='absolute text-base top-0 -right-6'>{isAdmin ? '+' + penOrders.length : '+' + quantity}</span>
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

                    <div className='flex-1'>
                        <Link to={'/'}>
                            <div className='flex justify-center items-center gap-1'>
                                <img className='w-11' src={logo} alt="" />
                                <h3 className='text-2xl font-bold italic bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text pr-2'>weShop</h3>
                            </div>
                        </Link>
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

                                        {isAdmin ? <li>
                                                <Link to={'/uploadProducts'}>Upload Products</Link>
                                            </li>
                                                :
                                                ''
                                            }
                                            {isAdmin ? <li>
                                                <Link to={'/adminPaymentHistory'}>Payment History</Link>
                                            </li>
                                                :
                                                ''
                                            }
                                            {user & !isAdmin ? <li>
                                                <Link to={'/paymentHistory'}>Payment History</Link>
                                            </li>
                                                :
                                                <li>
                                                    <a>Payment History</a>
                                                </li>
                                            }
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
                                <span className='absolute text-base top-0 -right-6'>{isAdmin ? '+' + penOrders.length : '+' + quantity}</span>
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
            {
                user && !isAdmin ? <div className={`fixed top-[120px] md:top-[136px] lg:top-[140px] 2xl:top-[141px] right-0 bottom-0 z-40 h-full w-[300px] md:w-[400px] xl:w-[500px] bg-[#4392FA] drop-shadow-xl ${isMenuToggled ? '' : 'hidden'}`}>
                    {/* close icon */}
                    <div className="flex items-center justify-between p-12">
                        <div className='flex items-center gap-3 cursor-pointer'>
                            <button onClick={() => {
                                document.getElementById('my_modal_5').showModal();
                            }} className='text-gray-200 border py-1 px-3 hover:bg-[#2d87fd]'>Pay Now</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle px-5 md:px-0">
                                <div className="modal-box 2xl:px-10 bg-[#2d87fd] md:py-7">
                                    <div className='flex justify-between items-center mb-5'>
                                        <h4 className='text-xl font-semibold text-base-300'>Order Summary</h4>
                                        <div className="modal-action mt-0">
                                            <form method="dialog">
                                                <button className="text-white text-xl"><TfiClose /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className={`flex flex-col gap-2 text-white list-none`}>
                                        {
                                            carts ? <>
                                                {
                                                    carts?.map(cart => <div key={cart?._id}
                                                        className='flex justify-between items-center bg-white p-1 border-2 text-black rounded'
                                                    >
                                                        <div className='flex items-center gap-3'>
                                                            <div className=''>
                                                                {
                                                                    cart?.image ? <img className='w-5 h-8' src={cart?.image[0]} alt="" />
                                                                        :
                                                                        ''
                                                                }
                                                            </div>
                                                            <div>
                                                                <h3 className='text-sm'>{cart?.title}</h3>
                                                                <p className='text-xs'>+{cart?.totalProduct}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-sm text-[#4B6FFF] font-medium">
                                                                ${cart.totalPrice}
                                                            </h3>
                                                        </div>
                                                    </div>)
                                                }
                                            </>
                                                :
                                                ''
                                        }
                                    </div>
                                    {/* cost */}
                                    <div className='text-sm text-white flex justify-between items-center mt-4'>
                                        <p>Shipping Cost</p>
                                        <p>${quantity < 2 ? `${quantity * 60}` : `${quantity * 60}`}</p>
                                    </div>
                                    <div className='text-white flex justify-between items-center mt-3 text-lg font-semibold'>
                                        <h3>Total</h3>
                                        <h3>${(totalCost ? totalCost + quantity * 60 : 0).toFixed(2)}</h3>
                                    </div>
                                    <div className='flex items-center justify-center gap-3'>
                                        <img className='w-20 md:w-28' src={bkash} alt="" />
                                        <img className='w-20 md:w-28' src={nogot} alt="" />
                                    </div>
                                    <div className='mb-3 text-white text-center'>
                                        <h5 className='text-sm'>Send Money Bksah/Nogot</h5>
                                        <h4 className='font-semibold'>+8801741352039</h4>
                                    </div>
                                    <form ref={form} onSubmit={handleOrderNow} className='flex flex-col w-full items-center gap-2'>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Last 4 Number:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='lastNumber' placeholder='Your Last Four Digit...' required />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Transaction Id:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='transactionId' placeholder='Your Full Address Please' required />
                                        </div>
                                        <div className='hidden'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Full Name:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='name' defaultValue={user?.displayName} readOnly />
                                        </div>
                                        <div className='hidden'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Email Address:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="email" name='email' defaultValue={user?.email} readOnly />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Contact Number:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='phone' placeholder='Phone Number Please' />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Current Address:</label>
                                            <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='address' placeholder='Your Full Address Please' />
                                        </div>
                                        <div className='w-full'>
                                            <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Type Any Message:</label>
                                            <textarea className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' name="message" id="" cols="30" placeholder='Notes about your order, such as special notes for delivery.'></textarea>
                                        </div>
                                        <button className="block w-full select-none rounded-lg bg-[#5820ff] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md hover:scale-110 duration-600 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-1"
                                            type="submit">
                                            Order Now
                                        </button>
                                    </form>

                                </div>
                            </dialog>
                            <h4 className='text-white'>${totalCost?.toFixed(2)}</h4>
                        </div>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <MdClose className="h-6 w-6 text-gray-200"></MdClose>
                        </button>
                    </div>
                    {/* menu */}
                    <div className={`flex flex-col px-5 gap-2 md:gap-5 text-white list-none`}>
                        {
                            carts ? <>
                                {
                                    carts?.map(cart => <div key={cart?._id}
                                        className='flex justify-between items-center bg-white p-3 border-2 text-black rounded-md'
                                    >
                                        <div className='flex items-center gap-3'>
                                            <div className=''>
                                                {
                                                    cart?.image ? <img className='w-8 h-12' src={cart?.image[0]} alt="" />
                                                        :
                                                        ''
                                                }
                                            </div>
                                            <div>
                                                <h3 className='text-sm md:text-base'>{cart?.title}</h3>
                                                <p className='text-xs md:text-sm'>Brand: {cart?.brand}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg text-[#4B6FFF] font-medium">
                                                ${cart.totalPrice}
                                            </h3>
                                            <div className="text-sm flex items-center">
                                                <p className="line-through">
                                                    ${cart.oldPrice}
                                                </p>
                                            </div>
                                        </div>
                                        <div onClick={() => handleRemoved(cart._id)}>
                                            <p>+{cart?.totalProduct}</p>
                                            <p className='text-2xl'>
                                                <RiDeleteBin6Line></RiDeleteBin6Line>
                                            </p>
                                        </div>
                                    </div>)
                                }
                            </>
                                :
                                ''
                        }
                    </div>

                </div>
                    :
                    <div className={`fixed top-[93px] md:top-[110px] lg:top-[140px] 2xl:top-[141px] right-0 bottom-0 z-40 h-full w-[300px] md:w-[400px] xl:w-[500px] bg-[#4392FA] drop-shadow-xl ${isMenuToggled ? '' : 'hidden'}`}>
                        {/* close icon */}
                        <div className="flex items-center justify-between p-7 md:p-12">
                            <h4 className='text-xl font-semibold text-base-300'>Order Summary</h4>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <MdClose className="h-6 w-6 text-gray-200"></MdClose>
                            </button>
                        </div>
                        <div className='h-1/6 md:h-2/6 relative'>
                            <div className='absolute bottom-0 left-8 md:left-16 xl:left-32'>
                                <h3 className='text-white text-xl md:text-2xl text-center font-medium'>Dear Please Login First</h3>
                                <div className='flex justify-center mt-3'>
                                    <Link to={'/login'}>
                                        <button className='bg-white py-1.5 px-3 hover:bg-slate-100'>Login</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {
                isAdmin ? <div className={`fixed top-[120px] md:top-[136px] lg:top-[140px] 2xl:top-[141px] right-0 bottom-0 z-40 h-full w-[300px] md:w-[400px] xl:w-[500px] bg-[#4392FA] drop-shadow-xl ${isMenuToggled ? '' : 'hidden'}`}>
                    {/* close icon */}
                    <div className="flex items-center justify-between p-12">
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <h4 className='text-white text-xl font-semibold'>Order Cost:</h4>
                            <h4 className='text-white text-lg font-semibold'>${totalOrderCost?.toFixed(2)}</h4>
                        </div>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <MdClose className="h-6 w-6 text-gray-200"></MdClose>
                        </button>
                    </div>
                    {/* menu */}
                    <div className={`flex flex-col px-5 gap-2 md:gap-5 text-white list-none`}>
                        {
                            penOrders ? <>
                                {
                                    penOrders?.map(item => <div key={item._id}>
                                        <div className="border bg-white flex justify-between items-center pr-1 md:pr-5 rounded shadow-lg gap-1 text-black">
                                            <div className="flex items-center gap-1 md:gap-3">
                                                <div>
                                                    <img className="h-16 w-9 md:w-16 md:h-24 rounded-tl rounded-bl" src={orderImg} alt="" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm md:text-lg">Cost: <span className="font-semibold">${item?.totalCost}</span></h3>
                                                    <h3 className="text-xs md:text-sm">Tran Id: {item?.transactionId}</h3>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <p className="text-sm md:text-base">{item?.date?.split('T')[0]}</p>
                                                <p className="text-sm md:text-lg font-semibold text-center">+{item?.carts?.length}</p>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </>
                                :
                                ''
                        }
                    </div>

                </div>
                    :
                    ''
            }
        </>
    );
};

export default MenuBar;