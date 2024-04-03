import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "../../Hook/useAxios";
import useProfile from "../../Hook/useProfile";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile, googleLoginUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const myAxios = useAxios();
    const [refetch] = useProfile();


    const onSubmit = async (data) => {
        console.log(data)
        const date = new Date();
        // reset();
        const imageFile = { image: data.image[0] }
        const resImage = await myAxios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        // console.log(resImage.data.data.display_url);
        if (resImage.data.success) {
            createUser(data.email, data.password)
                .then(res => {
                    const loggedUser = res.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, resImage.data.data.display_url)
                        .then(() => {
                            const userInfo = { name: data?.name, email: data?.email, photoURL: resImage.data.data.display_url, date }
                            navigate('/');
                            reset();
                            toast.success('Congratulations your account has been created')
                            myAxios.post('/users', userInfo)
                                .then(res => {
                                    console.log(res);
                                    refetch()
                                })

                        })
                        .catch(err => {
                            console.log(err);
                        })


                })
                .catch(err => {
                    console.log(err.message);
                    toast.error('You have opened an account with this email')
                })
        }

    }
    const googleLogin = () => {
        const date = new Date();
        googleLoginUser()
            .then(res => {
                toast.success('Thanks For Google Login')
                navigate(location.state ? location?.state : '/')
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    photoURL: res.user?.photoURL,
                    date
                }
                myAxios.post('/users', userInfo)
                    .then(res => {
                        console.log(res);
                        refetch()
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="mx-5 lg:mx-0 xl:px-[500px] pt-16 pb-16 bg-[#faf9ff]">

            <div className="containersL w-full py-16 px-8 bg-white">
                <div className="text">Create Your Account</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="input-data">
                            <input {...register("name", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Full Name</label>
                            {errors.name && <span className="text-red-600">Name Is Required</span>}
                        </div>
                        <div className="input-data2">
                            <input
                                type="file" {...register('image')} className="file-input w-full bg-transparent border-2 border-base-300" placeholder="Your Photo" />
                            <div className="underline"></div>
                            <label htmlFor="">Your Photo</label>
                            {errors.image && <span className="text-red-600">Photo Is Required</span>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input {...register("email", { required: true })} type="text" />
                            <div className="underline"></div>
                            <label htmlFor="">Email Address</label>
                            {errors.email && <span className="text-red-600">E-mail Is Required</span>}
                        </div>
                        <div className="input-data relative">
                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} type={showPassword ? 'text' : 'password'} />
                            <div className="underline"></div>
                            <label htmlFor="">Password</label>
                            <h2 className="cursor-pointer text-2xl absolute top-8 right-2" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h2>

                            {errors.password?.type === "required" &&
                                <p className="text-red-600">You have not provided password number</p>}
                            {errors.password?.type === "minLength" &&
                                <p className="text-red-600">Password number should be at least 6 characters long</p>}
                            {errors.password?.type === "pattern" &&
                                <p className="text-red-600">Password number should be an upper case word, a number and a spacial character</p>}
                        </div>
                    </div>
                    <div>
                        <div className="inline-flex items-center">
                            <label
                                className="ml-2 relative flex cursor-pointer items-center rounded-full p-3"
                                htmlFor="checkbox"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="bg-slate-400 behtmlFore:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all behtmlFore:absolute behtmlFore:top-2/4 behtmlFore:left-2/4 behtmlFore:block behtmlFore:h-12 behtmlFore:w-12 behtmlFore:-translate-y-2/4 behtmlFore:-translate-x-2/4 behtmlFore:rounded-full behtmlFore:bg-blue-gray-500 behtmlFore:opacity-0 behtmlFore:transition-opacity checked:border-[#6B3FFB] checked:bg-[#6B3FFB] checked:behtmlFore:bg-[#6B3FFB] hover:behtmlFore:opacity-10"
                                    id="checkbox"
                                />
                                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </label>
                            <label
                                className="mt-px cursor-pointer select-none font-light text-gray-700"
                                htmlFor="checkbox"
                            >
                                <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                                    I agree the
                                    <a
                                        className="font-medium transition-colors hover:text-pink-500"
                                        href="#"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </p>
                            </label>
                        </div>
                    </div>
                    <div className="pt-5 px-[18px]">
                        <button
                            className="block w-full select-none rounded-lg bg-[#6B3FFB] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md transition-all hover:shadow-sm hover:shadow-[#7531FA] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Registration
                        </button>
                        <h3 className="text-xl font-semibold text-center my-3">Or</h3>
                        <button onClick={googleLogin}
                            className="block w-full select-none rounded-lg bg-[#3F7FEB] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md transition-all hover:shadow-sm hover:shadow-[#3F7FEB] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Continue With Google
                        </button>
                    </div>
                    <p className="mt-6 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Already have an account?
                        <Link to={'/login'}><button className="font-bold text-[#6549FC] text-xl ml-2 transition-colors hover:text-blue-700">Login</button></Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;