import { useEffect, useState } from "react";
import EmptyOrder from "../Shared/EmptyOrder";
import '../Shared/all.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@emotion/react";
import orderImg from '../../assets/orderImg.png'
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import useAdminOrder from "../../Hook/useAdminOrder";
import toast from "react-hot-toast";
import useAxios from "../../Hook/useAxios";
import completePhoto from '../../assets/complete.png'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const AdminPaymentHistory = () => {
    const [orders, refetch] = useAdminOrder();
    console.log(orders);
    const [penOrders, setPenOrders] = useState([]);
    const [aprOrders, setAprOrders] = useState([]);
    const [completeOrders, setCompleteOrders] = useState([]);
    const myAxios = useAxios();
    useEffect(() => {
        const pendingOrders = orders.filter(order => order.order == 'pending')
        setPenOrders(pendingOrders);
    }, [orders])

    useEffect(() => {
        const approveOrders = orders.filter(order => order.order == 'approve')
        setAprOrders(approveOrders);
    }, [orders])

    useEffect(() => {
        const compOrders = orders.filter(order => order.order == 'complete')
        setCompleteOrders(compOrders);
    }, [orders])



    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handlePendingToApprove = (id) => {
        console.log(id);
        myAxios.patch(`/orders/${id}`)
            .then(res => {
                // console.log(res.data);
                if (res?.data?.modifiedCount > 0) {
                    toast.success('Product Order Approved')
                    refetch();
                }
            })
    }
    const handleApproveToComplete = (id) => {
        console.log(id);
        myAxios.patch(`/ordersComplete/${id}`)
            .then(res => {
                // console.log(res.data);
                if (res?.data?.modifiedCount > 0) {
                    toast.success('Product Delivery Complete')
                    refetch();
                }
            })
    }

    return (
        <div className="md:pt-7 md:px-5 lg:px-0 lg:pt-1 pb-12 bg-[#f9f9f9]">
            <div className="pt-8 md:pt-6 md:pb-4 lg:pt-8 flex items-center gap-1 px-1 md:gap-3 xl:px-[100px] text-xs md:text-base">
                <Link to={'/'}>
                    <h6 className="cursor-pointer hover:text-[#1976D2]">Home</h6>
                </Link>
                <p>
                    <FaAngleRight></FaAngleRight>
                </p>
                <h6 className="cursor-pointer hover:text-[#1976D2]">Payment History</h6>
            </div>
            {
                orders.length ? <div className="2xl:px-[480px] flex justify-center overflow-hidden 2xl:p-5">
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', }}
                    >
                        <div className="w-7/12 mx-auto">
                            <Tabs
                                orientation="horizontal"
                                value={value}
                                onChange={handleChange}
                            >
                                <Tab className="hover:text-[#1976D2]" label="Pending Orders" {...a11yProps(0)} />
                                <Tab className="hover:text-[#1976D2]" label="Approve Orders" {...a11yProps(1)} />
                                <Tab className="hover:text-[#1976D2]" label="Complete Orders" {...a11yProps(2)} />
                            </Tabs>
                        </div>
                        <div className="">
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0}>
                                    <div className="border minHScreen p-5 lg:p-9 flex flex-col gap-3 bg-[#f9f9f9]">
                                        {
                                            penOrders?.map(item => <div key={item._id}>
                                                <div className="border bg-white flex justify-between items-center pr-1 md:pr-5 rounded shadow-lg gap-1">
                                                    <div className="flex items-center gap-1 md:gap-3">
                                                        <div>
                                                            <img className="h-16 w-9 md:w-16 md:h-24 rounded-tl rounded-bl" src={orderImg} alt="" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-sm md:text-lg">Cost: <span className="font-semibold">${item?.totalCost}</span></h3>
                                                            <h3 className="text-xs md:text-sm">Tran Id: {item?.transactionId}</h3>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm md:text-base text-center">+{item?.carts?.length}</p>
                                                        <p className="text-sm md:text-base">{item?.date?.split('T')[0]}</p>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                                                        <button className="text-white bg-[#FF5861] py-1 px-3 rounded-md hover:bg-[#d34a51]" onClick={() => handlePendingToApprove(item?._id)}>Pending</button>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div className="border minHScreen p-5 lg:p-9 flex flex-col gap-3 bg-[#f9f9f9]">
                                        {
                                            aprOrders?.map(item => <div className="border bg-white flex justify-between items-center pr-1 md:pr-5 rounded shadow-lg gap-1" key={item._id}>
                                                <div className="flex items-center gap-1 md:gap-3">
                                                    <div>
                                                        <img className="h-16 w-9 md:w-16 md:h-24 rounded-tl rounded-bl" src={orderImg} alt="" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-sm md:text-lg">Cost: <span className="font-semibold">${item?.totalCost}</span></h3>
                                                        <h3 className="text-xs md:text-sm">Tran Id: {item?.transactionId}</h3>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                                                    <button className="text-white bg-[#20a26c] py-1 px-3 rounded-md hover:bg-[#2d8a63]" onClick={() => handleApproveToComplete(item?._id)}>Approved</button>
                                                    <progress className="progress progress-success w-10"></progress>
                                                </div>
                                                <div>
                                                    <p className="text-sm md:text-base text-center">+{item?.carts?.length}</p>
                                                    <p className="text-sm md:text-base">{item?.date?.split('T')[0]}</p>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <div className="border minHScreen p-5 lg:p-9 flex flex-col gap-3 bg-[#f9f9f9]">
                                        {
                                            completeOrders?.map(item => <div className="border bg-white flex justify-between items-center pr-1 md:pr-5 rounded shadow-lg gap-1" key={item._id}>
                                                <div className="flex items-center gap-1 md:gap-3">
                                                    <div>
                                                        <img className="h-16 w-9 md:w-16 md:h-24 rounded-tl rounded-bl" src={orderImg} alt="" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-sm md:text-lg">Cost: <span className="font-semibold">${item?.totalCost}</span></h3>
                                                        <h3 className="text-xs md:text-sm">Tran Id: {item?.transactionId}</h3>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm md:text-base text-center">+{item?.carts?.length}</p>
                                                    <p className="text-sm md:text-base">{item?.date?.split('T')[0]}</p>
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                                                   <img className="w-24" src={completePhoto} alt="" />
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </TabPanel>
                            </SwipeableViews>
                        </div>
                    </Box>


                </div>
                    :
                    <EmptyOrder></EmptyOrder>
            }
        </div>
    );
};

export default AdminPaymentHistory;