import { TypeAnimation } from "react-type-animation";
import ContactUsForm from "../../components/ContactUsForm";
import { motion } from "framer-motion";

const ContactUsMail = () => {

    return (
        <div className="py-10 xl:py-16 xl:[100px] 2xl:px-[200px] px-5 bg-[#E3EEF8]">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-500 mb-4 text-center pb-6 xl:pb-0 xl:mb-0"> <span className=" bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text">
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
                <div className="lg:col-span-4 overflow-hidden">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >

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
                    </motion.div>

                </div>
                <div className="lg:col-span-2 h-full py-8 px-6 md:mx-32 lg:mx-0 rounded-lg shadow-md shadow-[#5E53FD] overflow-hidden">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >

                        <ContactUsForm></ContactUsForm>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsMail;