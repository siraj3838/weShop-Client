import banner from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
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
                <SwiperSlide>
                    <img className='w-full h-[220px] md:h-[380px] lg:h-[700px]' src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[220px] md:h-[380px] lg:h-[700px]' src={banner4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[220px] md:h-[380px] lg:h-[700px]' src={banner} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[220px] md:h-[380px] lg:h-[700px]' src={banner3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;