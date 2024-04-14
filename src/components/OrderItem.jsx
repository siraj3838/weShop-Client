
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import '../Pages/Shared/all.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const OrderItem = ({ cart }) => {
    // console.log(cart);
    const { image, date, totalProduct, oldPrice, offerPrice, brand, title, totalPrice, itemId } = cart;

    let minPrice = oldPrice - totalPrice;
    let discount = oldPrice / 100;
    let offPriceS = minPrice / discount
    let offPrice = offPriceS?.toFixed(2)
    // console.log(offPrice);
    return (
        <div>
            <Link to={`/productDetails/${itemId}`}>
                <div className="border bg-white flex justify-between items-center pr-1 md:pr-5 rounded shadow-lg gap-3 hover:bg-blue-100">
                    <div className="flex items-center gap-1 md:gap-3 flex-1 w-2/12 mx-auto">
                        <div className="flex-1 w-2/4 mx-auto">
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
                                modules={[Autoplay, Pagination]}
                                className="mySwiper"
                            >
                                {image?.map((imga, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="flex justify-center items-center md:p-6 py-2">
                                            <img className="h-16 w-10 md:w-16 md:h-24 rounded-tl rounded-bl" src={imga} alt={`Slide ${idx}`} />
                                        </div>
                                    </SwiperSlide>

                                ))}
                            </Swiper>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm md:text-lg"><span className="font-semibold">{title}</span></h3>
                            <h3 className="text-xs md:text-sm">{brand}</h3>
                        </div>
                    </div>

                    <div className="flex-1 px-3 flex items-center justify-between">
                        <div className=''>
                            <h3 className="text-lg md:text-xl text-[#4B6FFF] font-medium">${oldPrice}</h3>
                            <div className="text-sm flex items-center">
                                <p className="line-through">{oldPrice}</p>
                                <p>-{offPrice}%</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-lg font-semibold text-right">+{totalProduct}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default OrderItem;