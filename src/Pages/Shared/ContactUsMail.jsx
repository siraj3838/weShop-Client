import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useRef } from "react";
import emailjs from '@emailjs/browser';
import { TypeAnimation } from "react-type-animation";

const ContactUsMail = () => {
    const { user } = useContext(AuthContext)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lvzmhyy', 'template_c3lwwil', form.current, 'DBmROeT5xM7DiMVgs')
            .then((result) => {
                console.log(result.text);
                toast.success('Thank You For Contact')
            }, (error) => {
                console.log(error.text);
            });
    };


    const handleNotUser = (e) => {
        e.preventDefault();
        toast.error('Dear Please Login First')
        document.getElementById('my_modal_3').showModal()

    }
    return (
        <div className="py-10 xl:py-12 xl:[100px] 2xl:px-[200px] px-5 bg-[#E3EEF8]">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-500 mb-4 text-center pb-6"> <span className=" bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text">
                    <TypeAnimation
                        sequence={[
                            'Contact', // Types 'One'
                            1000, // Waits 1s
                            'Contact With', // Deletes 'One' and types 'Two'
                            300, // Waits 2s
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </span>Us</h2>
            <div className="grid lg:grid-cols-6 grid-cols-1 gap-12 items-center">
                <div className="lg:col-span-4">
                    <div className="collapse collapse-arrow border-b-2 border-[#5E53FD]">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What we do
                        </div>
                        <div className="collapse-content">
                            <p>As a website designer we provide affordable website design services to our clients all over the world with best services. Our services include; small business website design services</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b-2 border-[#5E53FD]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Testing and Optimization
                        </div>
                        <div className="collapse-content">
                            <p>Conduct thorough testing to identify and fix any issues, such as broken links, browser compatibility problems, or usability concerns. Optimize the website’s performance, including page load times and mobile responsiveness.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b-2 border-[#5E53FD]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Launch and Deployment
                        </div>
                        <div className="collapse-content">
                            <p>Deploy the website on a web hosting platform or server. Ensure proper domain and hosting setup, configure security measures (such as SSL certificates), and monitor the website’s performance.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b-2 border-[#5E53FD]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Maintenance and Updates
                        </div>
                        <div className="collapse-content">
                            <p>Regularly update and maintain the website by adding new content, improving functionality, and addressing any technical issues. Monitor analytics to gain insights into user behavior and make data-driven improvements.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b-2 border-[#5E53FD]">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            User Experience (UX) Design
                        </div>
                        <div className="collapse-content">
                            <p> Focus on designing a user-friendly experience by creating wireframes or prototypes. This involves creating the layout, structure, and functionality of each page, ensuring intuitive navigation and easy access to information.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 h-full py-8 px-6 md:mx-32 lg:mx-0 rounded-lg shadow-md shadow-[#5E53FD]">
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
            </div>
        </div>
    );
};

export default ContactUsMail;