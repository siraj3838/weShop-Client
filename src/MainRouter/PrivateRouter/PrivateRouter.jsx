import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Pages/Shared/Loading";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hook/useAdmin";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin] = useAdmin();
    if(loading){
        return <div className="max-w-screen-xl mx-auto flex justify-center mt-20">
            <Loading></Loading>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRouter;