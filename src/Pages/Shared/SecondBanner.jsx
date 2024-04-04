import img from '../../assets/sBanner.jpg'
import img2 from '../../assets/banner1.jpg'
import img3 from '../../assets/banner3.jpg'
import img4 from '../../assets/banner4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const SecondBanner = () => {
    return (
        <div className='w-full'>
            <Swiper
                rewind={true}
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
                <SwiperSlide>
                    <img className='w-full h-[220px] md:h-[380px] lg:min-h-[600px]' src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[220px] md:h-[380px] lg:min-h-[600px]' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[220px] md:h-[380px] lg:min-h-[600px]' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[220px] md:h-[380px] lg:min-h-[600px]' src={img2} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SecondBanner;