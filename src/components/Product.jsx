import { Link } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from "../Hook/useAxios";
import toast from "react-hot-toast";
import useProducts from "../Hook/useProducts";

const Product = ({ product }) => {
    const { multiImg, title, offerPrice, price, _id } = product || {};
    let minPrice = price - offerPrice;
    let discount = price / 100;
    let offPriceS = minPrice / discount
    let offPrice = offPriceS.toFixed(2)
    const [isAdmin] = useAdmin();
    const myAxios = useAxios();
    const [products, refetch] = useProducts();
    
    const handleDeleteProduct = (_id) => {
        myAxios.delete(`/products/${_id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success('Product Removed Done')
                    refetch();
                }
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div className="overflow-visible">
            {isAdmin ? <div className="transition-all hover:-translate-y-3 duration-500 cursor-pointer hover:border-blue overflow-visible">
                <div className="border-2 p-2 rounded-md">
                    <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center py-6 rounded-md">
                        <Link to={`/productDetails/${_id}`}>
                            <div className=" ">
                                <img className="xl:h-[155px] h-[110px] md:h-[145px]" src={multiImg[0]} alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="h-8 leading-10 overflow-hidden text-sm">
                        <h4>{title}</h4>
                    </div>
                    <h3 className="text-lg text-[#4B6FFF] font-semibold">${offerPrice}</h3>
                    <div className="flex justify-between">
                        <div className="text-xs flex items-center">
                            <p className="line-through">{price}</p>
                            <p>-{offPrice}%</p>
                        </div>
                        {isAdmin ? <div>
                            <p className='text-2xl' onClick={() => handleDeleteProduct(_id)}>
                                <RiDeleteBin6Line></RiDeleteBin6Line>
                            </p>
                        </div>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
                :
                <div className="transition-all hover:-translate-y-3 duration-500 cursor-pointer hover:border-blue overflow-visible">
                    <Link to={`/productDetails/${_id}`}>
                        <div className="border-2 p-2 rounded-md">
                            <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center py-6 rounded-md">
                                <div className=" ">
                                    <img className="xl:h-[155px] h-[110px] md:h-[145px]" src={multiImg[0]} alt="" />
                                </div>
                            </div>
                            <div className="h-8 leading-10 overflow-hidden text-sm">
                                <h4>{title}</h4>
                            </div>
                            <h3 className="text-lg text-[#4B6FFF] font-semibold">${offerPrice}</h3>
                            <div className="text-xs flex items-center">
                                <p className="line-through">{price}</p>
                                <p>-{offPrice}%</p>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
};

export default Product;