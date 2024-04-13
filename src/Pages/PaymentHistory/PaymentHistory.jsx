import { useEffect, useState } from "react";
import useOrder from "../../Hook/useOrder";
import EmptyOrder from "../Shared/EmptyOrder";

const PaymentHistory = () => {
    const [orders] = useOrder();
    console.log(orders);
    const [penOrders, setPenOrders] = useState([]);
    const [aprOrders, setAprOrders] = useState([]);
    useEffect(()=>{
        const pendingOrders = orders.filter(order => order.order == 'pending')
        setPenOrders(pendingOrders);
    },[orders])
    
    useEffect(()=>{
        const approveOrders = orders.filter(order => order.order == 'approve')
        setAprOrders(approveOrders);
    },[orders])

    return (
        <div>
            <div className="mt-20">
                {
                    penOrders?.map(item => <div key={item._id}>
                        <p>{item.date}</p>
                    </div>)
                }
            </div>
            <EmptyOrder></EmptyOrder>
        </div>
    );
};

export default PaymentHistory;