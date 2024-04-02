import { useState } from 'react';
import '../Pages/Shared/all.css'

const ProductDetailsReview = ({ product }) => {
    const [show, setShow] = useState(false);
    const { multiImg, availableQuantity, quantity, offerPrice, price, brand, rating, description, title, _id } = product || {}
    return (
        <>
        <div>
            
        </div>
            <div className={`${show ? 'pb-28' : 'pb-0'}`}>
                <div className='flex justify-center py-6'>
                    <button onClick={() => setShow(!show)} className='bg-[#6B3FFB] hover:bg-[#603ecd] xl:py-3 lg:px-5 text-white lg:text-base font-semibold rounded-lg'>Write Review</button>
                </div>
                <div className={`${show ? 'block px-[400px]' : 'hidden'}`}>
                    <div className="containers w-full">
                        <div className="text">Write Your Feedback {title}</div>
                        <form action="#">
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Full Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Email Address</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Rating</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label htmlFor="">Subject</label>
                                </div>
                            </div>
                            <div className="form-row extra">
                                <div className="input-data textarea px-0 pb-0">
                                    <textarea rows="8" cols="80" required></textarea>
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