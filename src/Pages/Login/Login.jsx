import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import '../Shared/all.css'
import { useForm } from "react-hook-form";
import useAxios from "../../Hook/useAxios";
import useProfile from "../../Hook/useProfile";

const Login = () => {
    const { loginUser, googleLoginUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate = useNavigate();
    const location = useLocation();
    const myAxios = useAxios();
    const [refetch] = useProfile();

    const onSubmit = (data) => {
        console.log(data)
        // reset();
        loginUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                toast.success('Your account is logged in')

                navigate(location?.state ? location.state : '/');
                reset();
            })
            .catch(err => {
                console.log(err);
            })
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
        <div className="mx-5 lg:mx-0 xl:px-[740px] pt-16 pb-16 bg-[#faf9ff]">
            <div className="containersL w-full py-16 px-8 bg-white">
                <div className="text">Please Login</div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" {...register("email", { required: true })} />
                            <div className="underline"></div>
                            <label htmlFor="">Email Address</label>
                            {errors.email && <span className="text-red-600">E-mail Is Required</span>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data relative">
                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} />
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
                    <div className="pt-5 px-[18px]">
                        <button
                            className="block w-full select-none rounded-lg bg-[#6B3FFB] py-[10px] text-center align-middle font-sans text-lg font-semibold text-white shadow-md transition-all hover:shadow-sm hover:shadow-[#7531FA] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Login
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
                        Are you new here?Please
                        <Link to={'/registration'}><button className="font-bold text-[#6549FC] text-xl ml-2 transition-colors hover:text-blue-700">Registration</button></Link>
                    </p>
                </form>
            </div>

            {/* <h2 className="cursor-pointer text-2xl absolute mt-[76px] ml-72 md:ml-[350px] lg:ml-[345px]" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h2> */}
        </div>
    );
};

export default Login;