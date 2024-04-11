import '../Shared/all.css'
import { useForm } from "react-hook-form";
import useAxios from "../../Hook/useAxios";
import { useState } from "react";
import toast from "react-hot-toast";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Registration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const myAxios = useAxios();
    const [image, setImage] = useState([])

    const onSubmit = async (data) => {
        try {
            // Array to store hosted image URLs
            const hostedImageURLs = [];

            // Iterate over each selected image
            for (const image of data.image) {
                // Create FormData for the current image
                const formData = new FormData();
                formData.append("image", image);

                // Upload the current image
                const resImage = await myAxios.post(image_hosting_api, formData, {
                    headers: {
                        "content-type": "multipart/form-data",
                    }
                });

                // If upload is successful, store the hosted image URL
                if (resImage.data.success) {
                    hostedImageURLs.push(resImage.data.data.url);
                }
            }

            // Log all hosted image URLs in one array
            console.log("Hosted image URLs:", hostedImageURLs);
            setImage(hostedImageURLs)
            const rating = parseInt(data.rating);
            const price = parseInt(data.price);
            const offerPrice = parseInt(data.offerPrice);
            const quantity = parseInt(data.quantity);
            const availableQuantity = parseInt(data.availableQuantity);
            const productsInfo = {
                title: data?.title,
                description: data?.description,
                rating: rating,
                brand: data?.brand,
                price: price,
                offerPrice: offerPrice,
                quantity: quantity,
                availableQuantity: availableQuantity,
                multiImg: hostedImageURLs
            }
            // console.log(productsInfo);
            myAxios.post('/products', productsInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Your Product Upload Successfully')
                    }
                })
                .then(err => {
                    console.log(err);
                })
        } catch (error) {
            console.error("Error uploading images:", error);
        }
    };

    return (
        <div className="mx-5 lg:mx-0 lg:px-[200px] xl:px-[350px] minWidth3xlReg pt-16 pb-16 bg-[#faf9ff]">

            <div className="containersL w-full lg:py-16 lg:px-8 py-8 px-6 bg-white">
                <div className="text">Upload New Product</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        {/* input */}
                        <div className="input-data">
                            <input className='focus:outline-none' {...register("title", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Product Title</label>
                            {errors.title && <span className="text-red-600">Title Is Required</span>}
                        </div>
                        <div className="input-data">
                            <input className='focus:outline-none' {...register("description", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Product Description</label>
                            {errors.description && <span className="text-red-600">Description Is Required</span>}
                        </div>

                    </div>
                    <div className="form-row">
                        {/* input 2 */}
                        <div className="input-data">
                            <input className='focus:outline-none' {...register("rating", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Rating</label>
                            {errors.rating && <span className="text-red-600">Rating Is Required</span>}
                        </div>
                        <div className="input-data">
                            <input className='focus:outline-none' {...register("brand", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Brand Name</label>
                            {errors.brand && <span className="text-red-600">Brand Name Is Required</span>}
                        </div>
                    </div>
                    <div className="form-row">
                        {/* input 2 */}
                        <div className="input-data">
                            <input className='focus:outline-none' {...register("price", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Previous Price</label>
                            {errors.price && <span className="text-red-600">Previous Price Is Required</span>}
                        </div>
                        <div className="input-data">
                            <input className='focus:outline-none' {...register("offerPrice", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Offer Price</label>
                            {errors.offerPrice && <span className="text-red-600">Offer Price Is Required</span>}
                        </div>
                    </div>
                    <div className="form-row">
                        {/* input 2 */}
                        <div className="input-data">
                            <input className='focus:outline-none' {...register("quantity", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Quantity</label>
                            {errors.quantity && <span className="text-red-600">Quantity Is Required</span>}
                        </div>
                        <div className="input-data">
                            <input className='focus:outline-none' {...register("availableQuantity", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Available Quantity</label>
                            {errors.availableQuantity && <span className="text-red-600">Available Quantity Is Required</span>}
                        </div>
                    </div>
                    <div className="form-row">
                        {/* input 2 */}
                        <div className="input-data2">
                            <input className='focus:outline-none file-input w-full bg-transparent border-2 border-base-300'
                                type="file" {...register('image')} placeholder="Your Photo" multiple />
                            <div className="md:block hidden underline"></div>
                            {errors.image && <span className="text-red-600">Photo Is Required</span>}
                        </div>
                    </div>

                    <div className="pt-5 px-[18px]">
                        <button
                            className="block w-full select-none rounded-lg bg-[#6B3FFB] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md transition-all hover:shadow-sm hover:shadow-[#7531FA] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Upload
                        </button>

                    </div>

                </form>
            </div>
            <div className="grid grid-cols-2 w-2/6 mx-auto">
                {image.map((imf, idx) => <div key={idx}>
                    <img src={imf} alt="" />
                </div>)}
            </div>
        </div>
    );
};

export default Registration;