
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from '../../Hook/useProducts';
import { Link } from 'react-router-dom';


const ProductSlide = () => {
    const [products] = useProducts();
    return (
        <div className='xl:py-12 xl:[100px] 2xl:px-[200px] px-5 bg-[#E3EEF8]'>
            <Swiper
                spaceBetween={30}
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
            >
                {
                    products?.slice(5, 10)?.map(product => <SwiperSlide key={product._id}>
                        <div className='flex flex-col-reverse md:flex-row justify-between items-center py-10 md:py-10 lg:py-4'>
                            <div className="flex-1 md:px-20 text-center md:text-left">
                                <h3 className='text-2xl lg:text-4xl font-semibold'>{product?.title}</h3>
                                <p className='text-sm lg:text-lg py-4'>{product?.description}</p>
                                <div className='flex justify-center md:justify-start'>
                                    <Link>
                                        <button className='bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-7 xl:py-3 lg:px-10 text-white lg:text-lg font-semibold rounded-lg flex-1'>Available Now</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1 lg:w-3/5">
                                <img className='w-full mx-auto h-[200px] md:h-[300px] lg:min-h-[600px]' src={product?.multiImg[0]} alt="" />

                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default ProductSlide;