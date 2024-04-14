import { Link, useParams } from "react-router-dom";
import useOrder from "../Hook/useOrder";
import { useEffect, useState } from "react";

import { FaAngleRight } from "react-icons/fa6";
import OrderItem from "./OrderItem";

const PenOrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [orders, refetch] = useOrder();
    useEffect(() => {
        const findProduct = orders.find(pro => pro._id == id)
        setOrder(findProduct)
    }, [id, orders])
    console.log(order);

    
    return (
        <div className="lg:pb-16">
            <div className="pt-8 md:pt-12 md:pb-6 md:px-5 lg:pt-8 flex items-center gap-1 px-1 md:gap-3 xl:px-[100px] text-xs md:text-base">
                <Link to={'/'}>
                    <h6 className="cursor-pointer hover:text-[#1976D2]">Home</h6>
                </Link>
                <p>
                    <FaAngleRight></FaAngleRight>
                </p>
                <Link to={'/paymentHistory'}>
                    <h6 className="cursor-pointer hover:text-[#1976D2]">Payment History</h6>
                </Link>
                <p>
                    <FaAngleRight></FaAngleRight>
                </p>
                <h6 className="cursor-pointer hover:text-[#1976D2]">Order Details</h6>
                <p>
                    <FaAngleRight></FaAngleRight>
                </p>
                <h6 className="cursor-pointer hover:text-[#1976D2]">{order?.date?.split('T')[0]}</h6>
            </div>
            <div className="2xl:px-[400px] 2xl:p-5 w-full">
                <div className="border minHScreen p-5 lg:p-9 flex flex-col gap-3 bg-[#f9f9f9] w-full">
                    {
                        order?.carts?.map(cart => <OrderItem key={cart._id} cart={cart}></OrderItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PenOrderDetails;