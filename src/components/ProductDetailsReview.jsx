import { useState } from 'react';
import '../Pages/Shared/all.css'
import useProfile from '../Hook/useProfile';
import useAxios from '../Hook/useAxios';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Rating from 'react-rating';




const ProductDetailsReview = ({ product }) => {
    const [show, setShow] = useState(false);
    const { title, _id } = product || {}
    const [currentUser] = useProfile();
    const date = new Date();
    const myAxios = useAxios();

    const { refetch, data: curReview = [] } = useQuery({
        queryKey: ['reviews', _id],
        queryFn: async () => {
            const res = await myAxios.get('/reviews')
            const searchReviews = res?.data?.filter(rev => rev?.productID == _id)
            return searchReviews;
        }
    });

    const handleReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const review = { name, email, rating, subject, message, photo: currentUser?.photoURL, time: date, productID: _id };
        console.log(review);
        myAxios.post('/reviews', review)
            .then(res => {
                if (res.data.insertedId) {
                    refetch()
                    toast.success('Your Review Submitted');
                    form.reset()
                }
            })
            .catch(err => {
                console.log(err);
            })
    }




    return (
        <>
            {/* large */}
            <div className='xl:[100px] 2xl:px-[130px] mt-10 hidden 2xl:block'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        curReview?.map(cR => <SwiperSlide key={cR._id}>
                            <div className='bg-white p-10 rounded-lg relative ml-5'>
                                <div>
                                    <img className='w-20' src="https://i.ibb.co/z4K5Cdp/Quote-Marks-Gray.png" alt="" />
                                </div>
                                <div className='bg-[#6B3FFB] text-white px-10 pb-10 pt-20 rounded-3xl'>
                                    <p className='text-base h-16'>{'"' + cR?.message + '"'}</p>
                                    <h4 className='text-center text-3xl font-bold pt-4'>{cR?.name}</h4>
                                    <h4 className="text-xs font-semibold text-[#FFD100] text-center">
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
                                            initialRating={cR?.rating}
                                            readonly
                                        />
                                    </h4>
                                </div>
                                <div className='absolute top-12 right-40 h-36 w-36 border-4 rounded-full border-white'>
                                    <img className='w-full h-full rounded-full' src={cR?.photo} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            {/* medium */}
            <div className='xl:[100px] 2xl:px-[200px] mt-10 hidden xl:block 2xl:hidden'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        curReview?.map(cR => <SwiperSlide key={cR._id}>
                            <div className='bg-white p-10 rounded-lg relative'>
                                <div>
                                    <img className='w-20' src="https://i.ibb.co/z4K5Cdp/Quote-Marks-Gray.png" alt="" />
                                </div>
                                <div className='bg-[#6B3FFB] text-white px-10 pb-10 pt-24 rounded-3xl'>
                                    <p className='text-base'>{'"' + cR?.message + '"'}</p>
                                    <h4 className='text-center text-3xl font-bold pt-4'>{cR?.name}</h4>
                                    <h4 className="text-xs font-semibold text-[#FFD100] text-center">
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
                                            initialRating={cR?.rating}
                                            readonly
                                        />
                                    </h4>
                                </div>
                                <div className='absolute top-12 right-28 h-36 w-36 border-4 rounded-full border-white'>
                                    <img className='w-full h-full rounded-full' src={cR?.photo} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            {/* tablet */}
            <div className='xl:[100px] 2xl:px-[200px] mt-10 xl:hidden hidden md:block'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={0}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        curReview?.map(cR => <SwiperSlide key={cR._id}>
                            <div className='bg-white p-5 rounded-lg relative'>
                                <div>
                                    <img className='w-20' src="https://i.ibb.co/z4K5Cdp/Quote-Marks-Gray.png" alt="" />
                                </div>
                                <div className='bg-[#6B3FFB] text-white px-5 pb-5 pt-12 rounded-3xl'>
                                    <p className='text-base'>{'"' + cR?.message + '"'}</p>
                                    <h4 className='text-center text-xl font-bold pt-4'>{cR?.name}</h4>
                                    <h4 className="text-xs font-semibold text-[#FFD100] text-center">
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
                                            initialRating={cR?.rating}
                                            readonly
                                        />
                                    </h4>
                                </div>
                                <div className='absolute top-8 right-28 h-28 w-28 border-4 rounded-full border-white'>
                                    <img className='w-full h-full rounded-full' src={cR?.photo} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            {/* mobile */}
            <div className='xl:[100px] 2xl:px-[200px] mt-10 xl:hidden block md:hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        curReview?.map(cR => <SwiperSlide key={cR._id}>
                            <div className='bg-white p-5 rounded-lg relative'>
                                <div>
                                    <img className='w-20' src="https://i.ibb.co/z4K5Cdp/Quote-Marks-Gray.png" alt="" />
                                </div>
                                <div className='bg-[#6B3FFB] text-white px-5 pb-5 pt-12 rounded-3xl'>
                                    <p className='text-base'>{'"' + cR?.message + '"'}</p>
                                    <h4 className='text-center text-xl font-bold pt-4'>{cR?.name}</h4>
                                    <h4 className="text-xs font-semibold text-[#FFD100] text-center">
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
                                            initialRating={cR?.rating}
                                            readonly
                                        />
                                    </h4>
                                </div>
                                <div className='absolute top-8 right-24 h-28 w-28 border-4 rounded-full border-white'>
                                    <img className='w-full h-full rounded-full' src={cR?.photo} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

            <div className={`${show ? 'pb-28' : 'pb-0'}`}>
                <div className='flex justify-center py-6'>
                    <button onClick={() => setShow(!show)} className='bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-3 xl:py-3 xl:px-5 text-white lg:text-base font-semibold rounded-lg'>Write Review</button>
                </div>
                <div className={`${show ? 'block 2xl:px-[300px]' : 'hidden'}`}>
                    <div className="containers w-full">
                        <div className="text">Write Your Feedback {title}</div>
                        <form onSubmit={handleReview}>
                            <div className="form-row">
                                <div className="input-data">
                                    <input name='name' type="text" defaultValue={currentUser?.name} />
                                    <div className="underline"></div>
                                    <label htmlFor="">Full Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" name='email' defaultValue={currentUser?.email} />
                                    <div className="underline"></div>
                                    <label htmlFor="">Email Address</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" name='rating' required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Rating</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" name='subject' required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Subject</label>
                                </div>
                            </div>
                            <div className="form-row extra">
                                <div className="input-data textarea px-0 pb-0">
                                    <textarea name='message' rows="8" cols="80" required></textarea>
                                    <br />
                                    <div className="underline"></div>
                                    <label htmlFor="">Write your message</label>
                                    <br />
                                    <div className="form-row submit-btn marge">
                                        <div className="input-data">
                                            <div className="inner"></div>
                                            <input type="submit" value="Submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsReview;