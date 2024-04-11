import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../Pages/Shared/all.css'
import useProducts from "../Hook/useProducts";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Form } from 'react-bootstrap';
import { GrLocation } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Pages/Shared/all.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Rating from "react-rating";
import ProductDetailsReview from "./ProductDetailsReview";
import Loading from "../Pages/Shared/Loading";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxios from "../Hook/useAxios";
import useCart from "../Hook/useCart";






const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [products] = useProducts();
    const { user, isMenuToggled, setIsMenuToggled } = useContext(AuthContext);
    const navigate = useNavigate();
    const myAxios = useAxios();
    const [carts, refetch] = useCart()
    useEffect(() => {
        const findProduct = products.find(pro => pro._id == id)
        setProduct(findProduct)
    }, [id, products])
    // console.log(product.multiImg);
    let minPrice = product?.price - product?.offerPrice;
    let discount = product?.price / 100;
    let offPriceS = minPrice / discount
    let offPrice = offPriceS?.toFixed(2)
    // let priceInt = parseInt(offPrice)
    // let quantityInt = parseInt(product?.quantity);
    // console.log(quantityInt);


    const [quantity, setQuantity] = useState(1);

    const incremet = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);


    const handleAddToCart = (id, quantity) => {
        const total = product?.offerPrice * quantity;
        const total2 = product?.price * quantity;
        const productInfo = {
            clientEmail: user?.email,
            clientName: user?.displayName,
            price: product?.offerPrice,
            image: product?.multiImg,
            title: product?.title,
            totalPrice: total,
            totalProduct: quantity,
            brand: product?.brand,
            oldPrice: total2
        }
        // console.log(productInfo);
        myAxios.post('/carts', productInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Product Added Done')
                    setIsMenuToggled(true)
                    refetch();
                    
                }
                // console.log(res.data);
                if (res.data.message == 'success') {
                    toast.error('Please Removed Old Cart First')
                    refetch();
                }
                if (res.data.message == 'removed') {
                    toast.error('You Already select this cart')
                    refetch();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleNotUser = () => {
        toast.error('Dear Please Login First')
        navigate('/login')

    }

    return (
        <>
            {
                product ? <div className="w-full xl:px-[100px] bg-[#EFF0F5] px-5 pb-6 md:pb-5 xl:pb-8">
                    <div className="pt-8 md:pt-6 lg:pt-8 flex items-center gap-3">
                        <Link to={'/'}>
                            <h6>Home</h6>
                        </Link>
                        <p>
                            <FaAngleRight></FaAngleRight>
                        </p>
                        <h6>Product Details</h6>
                        <p>
                            <FaAngleRight></FaAngleRight>
                        </p>
                        <h6>{product?.title}</h6>
                    </div>
                    {/* large */}
                    <div className="xl:pt-8 hidden md:hidden xl:block">
                        <div className="grid lg:grid-cols-4 gap-6 bg-white">
                            <div className="keen-slider xl:max-w-sm lg:col-span-1 py-10 px-0 xl:px-10">
                                <Swiper
                                    spaceBetween={20}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    style={{ width: '100%' }}
                                >
                                    {product?.multiImg?.map((imga, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center px-6 py-10 rounded-md overflow-hidden">
                                                <div className="hover:scale-110 duration-1000 transition-all ">
                                                    <img className="w-full h-[230px]" src={imga} alt={`Slide ${idx}`} />
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    ))}
                                </Swiper>

                            </div>
                            <div className="lg:col-span-2 space-y-3 py-10">
                                <div>
                                    <h2 className="text-2xl">{product?.title}</h2>
                                    <div className="flex items-center gap-2 text-base py-2">
                                        <h4 className="text-xs font-semibold text-[#FFD100]">
                                            <Rating
                                                emptySymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="h-4 w-full"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>}
                                                fullSymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-4 w-full"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>}
                                                initialRating={product?.rating}
                                                readonly
                                            />
                                        </h4>
                                        <p>{product?.rating ? product?.rating + ' ' + 'Rating' : ''}</p>
                                    </div>
                                </div>
                                <div className="pb-6">
                                    <h3 className="text-3xl text-[#4B6FFF] font-medium">${product?.offerPrice}</h3>
                                    <div className="text-sm flex items-center">
                                        <p className="line-through">{product?.price}</p>
                                        <p>-{offPrice}%</p>
                                    </div>
                                </div>
                                <div className="quantity inline-flex items-center justify-between relative border rounded-pill">
                                    <Button
                                        variant="outline-primary"
                                        className="rounded-circle p-0 bg-[#bba6ff] text-white"
                                        onClick={decrement}
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="quantity"
                                        value={quantity}
                                        onBlur={() => { }}
                                    />
                                    <Button
                                        variant="primary"
                                        className="rounded-circle p-0 bg-[#6B3FFB] text-white"
                                        onClick={incremet}
                                    >
                                        +
                                    </Button>
                                </div>
                                {
                                    user?.email ? <div className="flex items-center gap-4 lg:w-9/12 xl:w-7/12 pt-4">
                                        <button className="bg-[#3fa9fb] hover:bg-[#4795d1] xl:py-3 lg:px-5 text-white lg:text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                        <button onClick={() => handleAddToCart(product?._id, quantity)} className="bg-[#6B3FFB] hover:bg-[#603ecd] xl:py-3 lg:px-5 text-white lg:text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                    </div>
                                        :
                                        <div className="flex items-center gap-4 lg:w-9/12 xl:w-7/12 pt-4">
                                            <button onClick={handleNotUser} className="bg-[#3fa9fb] hover:bg-[#4795d1] xl:py-3 lg:px-5 text-white lg:text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                            <button onClick={handleNotUser} className="bg-[#6B3FFB] hover:bg-[#603ecd] xl:py-3 lg:px-5 text-white lg:text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                        </div>
                                }
                            </div>
                            {
                                product ? <div className="lg:col-span-1 bg-[#FAFAFA] py-10">
                                    <div className="px-10">
                                        <p className="text-sm font-semibold text-gray-500 pb-3">Delivery</p>
                                        <div className="flex items-center gap-2 text-sm py-2">
                                            <p className="text-xl">
                                                <GrLocation />
                                            </p>
                                            <h5>Dhaka, Bangladesh</h5>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm py-2">
                                            <p className="text-2xl">
                                                <TbTruckDelivery />
                                            </p>
                                            <div className="flex items-center gap-7">
                                                <h5><span className="font-semibold">Standard Delivery</span> 5 - 10 day</h5>
                                                <h4>$<span className="font-semibold">99</span></h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-2">
                                            <p className="text-xl">
                                                <BsCashCoin />
                                            </p>
                                            <h5>Cash on Delivery available</h5>
                                        </div>
                                    </div>
                                    <div className="divider py-1"></div>
                                    <div className="px-10">
                                        <p className="text-sm font-semibold text-gray-500 pb-3">Service</p>
                                        <div className="flex items-center gap-2 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <MdVerified />
                                            </p>
                                            <h5>
                                                100% Authentic from Trusted Brand</h5>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-xl">
                                                <FaCircleArrowLeft />
                                            </p>
                                            <h5>14 days free & easy return</h5>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <HiMiniShieldCheck />
                                            </p>
                                            <h5>1 Year Seller Warranty</h5>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                    {/* md  */}
                    <div className="pt-5 hidden md:block xl:hidden w-full">
                        <div className="grid grid-cols-1 md:grid-cols-4 bg-white w-full">
                            <div className="col-span-2">
                                <div className="keen-slider px-8 pt-8 pb-2">
                                    <Swiper
                                        spaceBetween={20}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                        style={{ width: '100%' }}
                                    >
                                        {product?.multiImg?.map((imga, idx) => (
                                            <SwiperSlide key={idx}>
                                                <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center px-6 py-10 rounded-md overflow-hidden">
                                                    <div className="hover:scale-110 duration-1000 transition-all ">
                                                        <img className="w-full h-[140px]" src={imga} alt={`Slide ${idx}`} />
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                        ))}
                                    </Swiper>

                                </div>
                                <div className=" space-y-1 px-12">
                                    <h2 className="text-xl md:text-xl">{product?.title}</h2>
                                    <div className="flex items-center gap-2 text-base py-1">
                                        <h4 className="text-xs font-semibold text-[#FFD100]">
                                            <Rating
                                                emptySymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="h-4 w-full"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>}
                                                fullSymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-4 w-full"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>}
                                                initialRating={product?.rating}
                                                readonly
                                            />
                                        </h4>
                                        <p>{product?.rating ? product?.rating + ' ' + 'Rating' : ''}</p>
                                    </div>
                                    <div className="pb-3">
                                        <h3 className="md:text-2xl text-[#4B6FFF] font-medium">${product?.offerPrice}</h3>
                                        <div className="text-sm flex items-center">
                                            <p className="line-through">{product?.price}</p>
                                            <p>-{offPrice}%</p>
                                        </div>
                                    </div>
                                    <div className="quantity inline-flex items-center justify-between relative border rounded-pill text-sm">
                                        <Button
                                            variant="outline-primary"
                                            className="rounded-circle p-0 bg-[#bba6ff] text-white"
                                            onClick={decrement}
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </Button>
                                        <Form.Control
                                            type="text"
                                            name="quantity"
                                            value={quantity}
                                            onBlur={() => { }}
                                        />
                                        <Button
                                            variant="primary"
                                            className="rounded-circle p-0 bg-[#6B3FFB] text-white"
                                            onClick={incremet}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    {
                                        user?.email ? <div className="flex items-center gap-4 lg:w-9/12 xl:w-7/12 pt-4">
                                            <button className="bg-[#3fa9fb] hover:bg-[#4795d1] py-2 px-2 md:py-2 md:px-2 text-white text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                            <button onClick={() => handleAddToCart(product?._id, quantity)} className="bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-1.5 md:py-2 md:px-2 text-white text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                        </div>
                                            :
                                            <div className="flex items-center gap-4 lg:w-9/12 xl:w-7/12 pt-4">
                                                <button onClick={handleNotUser} className="bg-[#3fa9fb] hover:bg-[#4795d1] py-2 px-2 md:py-2 md:px-2 text-white text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                                <button onClick={handleNotUser} className="bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-1.5 md:py-2 md:px-2 text-white text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                            </div>
                                    }
                                </div>
                            </div>
                            {
                                product ? <div className="col-span-2 bg-[#FAFAFA] py-10">
                                    <div className="px-6">
                                        <p className="text-sm font-semibold text-gray-500 pb-6">Delivery</p>
                                        <div className="flex items-center gap-2 text-sm py-4">
                                            <p className="text-xl">
                                                <GrLocation />
                                            </p>
                                            <h5>Dhaka, Bangladesh</h5>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm py-4">
                                            <p className="text-2xl">
                                                <TbTruckDelivery />
                                            </p>
                                            <div className="flex items-center gap-7">
                                                <h5><span className="font-semibold">Standard Delivery</span> 5 - 10 day</h5>
                                                <h4>$<span className="font-semibold">99</span></h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-4">
                                            <p className="text-xl">
                                                <BsCashCoin />
                                            </p>
                                            <h5>Cash on Delivery available</h5>
                                        </div>
                                    </div>
                                    <div className="divider py-1"></div>
                                    <div className="px-6">
                                        <p className="text-sm font-semibold text-gray-500 pb-6">Service</p>
                                        <div className="flex items-center gap-2 text-sm py-4 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <MdVerified />
                                            </p>
                                            <h5>
                                                100% Authentic from Trusted Brand</h5>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm py-4 text-[#4B6FFF]">
                                            <p className="text-xl">
                                                <FaCircleArrowLeft />
                                            </p>
                                            <h5>14 days free & easy return</h5>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-4 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <HiMiniShieldCheck />
                                            </p>
                                            <h5>1 Year Seller Warranty</h5>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    ''
                            }

                        </div>
                    </div>
                    {/* mobile+  */}
                    <div className="pt-6 block md:hidden xl:hidden w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-4 bg-white w-full">
                            <div className="keen-slider p-6 col-span-1">
                                <Swiper
                                    spaceBetween={20}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    style={{ width: '100%' }}
                                >
                                    {product?.multiImg?.map((imga, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center px-6 py-10 rounded-md overflow-hidden">
                                                <div className="hover:scale-110 duration-1000 transition-all ">
                                                    <img className="w-full h-[180px]" src={imga} alt={`Slide ${idx}`} />
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    ))}
                                </Swiper>

                            </div>
                            <div className="col-span-2 space-y-1 px-6">
                                <h2 className="text-xl md:text-2xl">{product?.title}</h2>
                                <div className="flex items-center gap-2 text-base py-2">
                                    <h4 className="text-xs font-semibold text-[#FFD100]">
                                        <Rating
                                            emptySymbol={<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-4 w-full"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                />
                                            </svg>}
                                            fullSymbol={<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-4 w-full"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>}
                                            initialRating={product?.rating}
                                            readonly
                                        />
                                    </h4>
                                    <p>{product?.rating ? product?.rating + ' ' + 'Rating' : ''}</p>
                                </div>
                                <div className="pb-6">
                                    <h3 className="text-2xl md:text-3xl text-[#4B6FFF] font-medium">${product?.offerPrice}</h3>
                                    <div className="text-sm flex items-center">
                                        <p className="line-through">{product?.price}</p>
                                        <p>-{offPrice}%</p>
                                    </div>
                                </div>
                                <div className="quantity inline-flex items-center justify-between relative border rounded-pill">
                                    <Button
                                        variant="outline-primary"
                                        className="rounded-circle p-0 bg-[#bba6ff] text-white"
                                        onClick={decrement}
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        name="quantity"
                                        value={quantity}
                                        onBlur={() => { }}
                                    />
                                    <Button
                                        variant="primary"
                                        className="rounded-circle p-0 bg-[#6B3FFB] text-white"
                                        onClick={incremet}
                                    >
                                        +
                                    </Button>
                                </div>
                            
                                {
                                    user?.email ? <div className="flex items-center gap-4 pt-6">
                                        <button className="bg-[#3fa9fb] hover:bg-[#4795d1] py-2 px-2 md:py-2 md:px-2 text-white text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                        <button onClick={() => handleAddToCart(product?._id, quantity)} className="bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-1.5 md:py-2 md:px-2 text-white text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                    </div>
                                        :
                                        <div className="flex items-center gap-4 pt-6">
                                            <button onClick={handleNotUser} className="bg-[#3fa9fb] hover:bg-[#4795d1] py-2 px-2 md:py-3 md:px-7 text-white text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                            <button onClick={handleNotUser} className="bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-1.5 md:py-3 md:px-7 text-white text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                        </div>
                                }
                            </div>
                            {
                                product ? <div className="col-span-1 bg-[#FAFAFA] py-10">
                                    <div className="px-6">
                                        <p className="text-sm font-semibold text-gray-500 pb-3">Delivery</p>
                                        <div className="flex items-center gap-2 text-sm py-2">
                                            <p className="text-xl">
                                                <GrLocation />
                                            </p>
                                            <h5>Dhaka, Bangladesh</h5>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm py-2">
                                            <p className="text-2xl">
                                                <TbTruckDelivery />
                                            </p>
                                            <div className="flex items-center gap-7">
                                                <h5><span className="font-semibold">Standard Delivery</span> 5 - 10 day</h5>
                                                <h4>$<span className="font-semibold">99</span></h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-2">
                                            <p className="text-xl">
                                                <BsCashCoin />
                                            </p>
                                            <h5>Cash on Delivery available</h5>
                                        </div>
                                    </div>
                                    <div className="divider py-1"></div>
                                    <div className="px-6">
                                        <p className="text-sm font-semibold text-gray-500 pb-3">Service</p>
                                        <div className="flex items-center gap-2 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <MdVerified />
                                            </p>
                                            <h5>
                                                100% Authentic from Trusted Brand</h5>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-xl">
                                                <FaCircleArrowLeft />
                                            </p>
                                            <h5>14 days free & easy return</h5>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <HiMiniShieldCheck />
                                            </p>
                                            <h5>1 Year Seller Warranty</h5>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                    <div className="divider py-4"></div>
                    <div className="bg-white p-6 md:p-6 xl:p-10">
                        <h3 className="text-xl font-bold text-gray-500 mb-4">Product Details:</h3>
                        <p>{product?.description}</p>
                    </div>

                    {/* Review */}
                    <ProductDetailsReview product={product}></ProductDetailsReview>
                </div>
                    :

                    <div className="my-96 flex justify-center">
                        <Loading></Loading>
                    </div>
            }
        </>
    );
};

export default ProductDetails;