// import { useContext, useRef, useState } from "react";
// import useCart from "../Hook/useCart";
// import emailjs from '@emailjs/browser';
// import useAxios from "../Hook/useAxios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { TfiClose } from "react-icons/tfi";

// import bkash from '../assets/bkash.png'
// import nogot from '../assets/nogot.png'
// import { AuthContext } from "../Provider/AuthProvider";

// const BuyNowForm = () => {
//     const form = useRef();
//     const [carts, refetch] = useCart();
//     const [totalCost, setTotalCost] = useState(0);
//     const [quantity, setQuantity] = useState();
//     const order = "pending";
//     const myAxios = useAxios();
//     const navigate = useNavigate();
//     const { user } = useContext(AuthContext);

//     const handleOrderNow = async (e) => {
//         e.preventDefault();

//         const formData = e.target;
//         const email = formData.email.value;
//         const name = formData.name.value;
//         const phone = formData.phone.value;
//         const message = formData.message.value;
//         const address = formData.address.value;
//         const lastNumber = formData.lastNumber.value;
//         const transactionId = formData.transactionId.value;
//         const date = new Date();
//         // Combine form data with other information
//         const totalCostReal = totalCost + (quantity * 60);


//         const payment = {
//             cartId: carts?.map(item => item._id),
//             itemId: carts?.map(item => item.itemId),
//             totalCost: parseInt(totalCostReal?.toFixed(2)),
//             carts: carts,
//             orderEmail: email,
//             orderName: name,
//             message: message,
//             number: phone,
//             address: address,
//             order,
//             lastNumber,
//             transactionId,
//             date
//         }
//         // console.log(payment);
//         const res = await myAxios.post('/orders', payment)
//         // console.log(res.data);
//         refetch();
//         if (res.data.deleteResult.deletedCount > 0) {
//             // console.log(res.data);
//             emailjs.sendForm('service_vvlritg', 'template_lbadt6z', form.current, '9iRzmO_mGC1PX15jm')
//                 .then((result) => {
//                     // console.log(result.text);
//                     // console.log(form);
//                     toast.success('Thank You For order')
//                     // setIsMenuToggled(false)
//                     navigate('/paymentHistory')
//                 }, (error) => {
//                     console.log(error);
//                 });
//         }

//     }
//     return (
//         <div className="w-full items-center">
//             <button onClick={() => {
//                 document.getElementById('my_modal_4').showModal();
//             }} className="flex-1 mt-6 w-full bg-[#3fa9fb] hover:bg-[#4795d1] xl:py-3 py-2 text-white lg:text-base font-semibold rounded-lg">Buy Now</button>
//             <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle px-5 md:px-0">
//                 <div className="modal-box 2xl:px-10 bg-[#2d87fd] md:py-7">
//                     <div className='flex justify-between items-center'>
//                         <div className="modal-action mt-0">
//                             <form method="dialog">
//                                 <button className="text-white text-xl"><TfiClose /></button>
//                             </form>
//                         </div>
//                     </div>
//                     <div className={`flex flex-col gap-2 text-white list-none`}>
//                         {
//                             carts ? <>
//                                 {
//                                     carts?.map(cart => <div key={cart?._id}
//                                         className='flex justify-between items-center bg-white p-1 border-2 text-black rounded'
//                                     >
//                                         <div className='flex items-center gap-3'>
//                                             <div className=''>
//                                                 {
//                                                     cart?.image ? <img className='w-5 h-8' src={cart?.image[0]} alt="" />
//                                                         :
//                                                         ''
//                                                 }
//                                             </div>
//                                             <div>
//                                                 <h3 className='text-sm'>{cart?.title}</h3>
//                                                 <p className='text-xs'>+{cart?.totalProduct}</p>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-sm text-[#4B6FFF] font-medium">
//                                                 ${cart.totalPrice}
//                                             </h3>
//                                         </div>
//                                     </div>)
//                                 }
//                             </>
//                                 :
//                                 ''
//                         }
//                     </div>
//                     {/* cost */}
//                     <div className='text-sm text-white flex justify-between items-center mt-4'>
//                         <p>Shipping Cost</p>
//                         <p>$60</p>
//                     </div>
//                     <div className='text-white flex justify-between items-center mt-3 text-lg font-semibold'>
//                         <h3>Total</h3>
//                         <h3>${(totalCost ? totalCost + quantity * 60 : 0).toFixed(2)}</h3>
//                     </div>
//                     <div className='flex items-center justify-center gap-3'>
//                         <img className='w-20 md:w-28' src={bkash} alt="" />
//                         <img className='w-20 md:w-28' src={nogot} alt="" />
//                     </div>
//                     <div className='mb-3 text-white text-center'>
//                         <h5 className='text-sm'>Send Money Bksah/Nogot</h5>
//                         <h4 className='font-semibold'>+8801741352039</h4>
//                     </div>
//                     <form ref={form} onSubmit={handleOrderNow} className='flex flex-col w-full items-center gap-2'>
//                         <div className='w-full'>
//                             <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Last 4 Number:</label>
//                             <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='lastNumber' placeholder='Your Last Four Digit...' required />
//                         </div>
//                         <div className='w-full'>
//                             <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Transaction Id:</label>
//                             <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='transactionId' placeholder='Your Full Address Please' required />
//                         </div>
//                         <div className='hidden'>
//                             <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Full Name:</label>
//                             <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='name' defaultValue={user?.displayName} readOnly />
//                         </div>
//                         <div className='hidden'>
//                             <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Email Address:</label>
//                             <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="email" name='email' defaultValue={user?.email} readOnly />
//                         </div>
//                         <div className='w-full'>
//                             <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Contact Number:</label>
//                             <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='phone' placeholder='Phone Number Please' />
//                         </div>
//                         <div className='w-full'>
//                             <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Your Current Address:</label>
//                             <input className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' type="text" name='address' placeholder='Your Full Address Please' />
//                         </div>
//                         <div className='w-full'>
//                             <label className="text-white text-sm font-medium"><span className='text-red-700 text-base'>*</span> Type Any Message:</label>
//                             <textarea className='w-full focus:bg-gray-50 focus:outline-none bg-white py-1 px-3 rounded text-sm' name="message" id="" cols="30" placeholder='Notes about your order, such as special notes for delivery.'></textarea>
//                         </div>
//                         <button className="block w-full select-none rounded-lg bg-[#5820ff] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md hover:scale-110 duration-600 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-1"
//                             type="submit">
//                             Order Now
//                         </button>
//                     </form>

//                 </div>
//             </dialog>
//             <h4 className='text-white'>${totalCost?.toFixed(2)}</h4>
//         </div>
//     );
// };

// export default BuyNowForm;