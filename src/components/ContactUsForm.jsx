import { useContext, useRef } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast"

const ContactUsForm = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lvzmhyy', 'template_c3lwwil', form.current, 'DBmROeT5xM7DiMVgs')
            .then((result) => {
                // console.log(result.text);
                toast.success('Thank You For Contact')
            }, (error) => {
                console.log(error.text);
            });
    };


    const handleNotUser = (e) => {
        e.preventDefault();
        toast.error('Dear Please Login First')
        navigate('/login')

    }
    return (
        <div>
            {
                user ? <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-start gap-4">
                    <input type="text" className="py-3 px-3 bg-base-200 outline-1 outline-[#5E53FD] text-sm rounded-md hidden" name="name" defaultValue={user?.displayName} />
                    <input type="text" className="py-3 px-3 bg-base-200 outline-1 outline-[#5E53FD] text-sm rounded-md hidden" name="email" defaultValue={user?.email} />
                    <input type="text" className="py-3 px-3 bg-base-200 outline-1 outline-[#5E53FD] text-sm rounded-md" name="subject" placeholder="Subject" />
                    <textarea className="px-3 py-3 bg-base-200 outline-1 outline-[#5E53FD] text-sm rounded-md" name="message" placeholder="Message" id="" cols="30" rows='10'></textarea>
                    <div className="flex justify-center">
                        <button id="btn" type="submit" className="bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-7 xl:py-2 lg:px-12 text-white lg:text-lg font-semibold rounded-lg">
                            Submit
                        </button>
                    </div>
                </form>
                    :
                    <form onSubmit={handleNotUser} className="flex flex-col justify-start gap-4">
                        <input type="text" className="py-3 px-3 bg-base-200 outline-1 outline-[#5E53FD] text-sm rounded-md hidden" name="name" placeholder="Name" />
                        <input type="text" className="py-3 px-3 bg-base-200 outline-1 outline-[#5E53FD] text-sm rounded-md hidden" name="email" placeholder="E-mail" />
                        <input type="text" className="py-3 px-3 bg-base-200 outline-1 outline-[#5E53FD] text-sm rounded-md" name="subject" placeholder="Subject" />
                        <textarea className="px-3 py-3 bg-base-200 outline-1 outline-[#5E53FD] text-sm rounded-md" name="message" placeholder="Message" id="" cols="30" rows='10'></textarea>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-7 xl:py-2 lg:px-12 text-white lg:text-lg font-semibold rounded-lg">
                                Submit
                            </button>
                        </div>
                    </form>
            }
        </div>
    );
};

export default ContactUsForm;