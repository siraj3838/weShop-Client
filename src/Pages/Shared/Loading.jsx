import { ClapSpinner } from "react-spinners-kit";

const Loading = () => {
    return (
        <div className="flex justify-center py-10">
            <ClapSpinner size={70} />
        </div>
    );
};

export default Loading;