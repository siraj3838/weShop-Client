import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Cart from "../Pages/Cart/Cart";
import ProductDetails from "../components/ProductDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import PenOrderDetails from "../components/PenOrderDetails";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import AdminPaymentHistory from "../Pages/AdminPaymentHistory/AdminPaymentHistory";
import UploadProducts from "../Pages/UploadProducts/UploadProducts";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>
            },
            {
                path: '/penOrderDetails/:id',
                element: <PrivateRouter><PenOrderDetails></PenOrderDetails></PrivateRouter>
            },
            {
                path: '/paymentHistory',
                element: <PrivateRouter><PaymentHistory></PaymentHistory></PrivateRouter>
            },
            {
                path: '/uploadProducts',
                element: <PrivateRouter><UploadProducts></UploadProducts></PrivateRouter>
            },
            {
                path: '/adminPaymentHistory',
                element: <PrivateRouter><AdminPaymentHistory></AdminPaymentHistory></PrivateRouter>
            },
        ]
    }
])

export default MainRouter;