import './all.css'
import TextAnimation1 from "../../components/TextAnimation1";
import TextAnimation2 from "../../components/TextAnimation2";
import TextAnimation3 from "../../components/TextAnimation3";

const OurActivities = () => {
    return (
        <div>
            <div className="md:py-8 xl:py-16 xl:[100px] 2xl:px-[200px] bg-[#DEE4FF] text-center px-5">
                <div className="flex items-center justify-between py-8 md:py-0 lg:py-0">
                    <TextAnimation1></TextAnimation1>
                    <TextAnimation2></TextAnimation2>
                    <TextAnimation3></TextAnimation3>
                </div>
            </div>
        </div>
    );
};

export default OurActivities;