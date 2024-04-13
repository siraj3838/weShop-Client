import './all.css'
import TextAnimation1 from "../../components/TextAnimation1";
import TextAnimation2 from "../../components/TextAnimation2";
import TextAnimation3 from "../../components/TextAnimation3";
import { motion } from 'framer-motion';

const OurActivities = () => {
    return (
        <div className='overflow-hidden'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >

                <div className="md:py-8 xl:py-16 xl:[100px] 2xl:px-[200px] bg-[#DEE4FF] text-center px-5">
                    <div className="flex items-center justify-between py-8 md:py-0 lg:py-0">
                        <TextAnimation1></TextAnimation1>
                        <TextAnimation2></TextAnimation2>
                        <TextAnimation3></TextAnimation3>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default OurActivities;