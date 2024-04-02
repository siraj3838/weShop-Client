import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { multiImg, title, offerPrice, price, _id } = product || {};
    let minPrice = price - offerPrice;
    let discount = price / 100;
    let offPriceS = minPrice / discount
    let offPrice = offPriceS.toFixed(2)
    return (
        <div className="transition-all hover:-translate-y-3 duration-500 cursor-pointer hover:border-blue">
            <Link to={`/productDetails/${_id}`}>
                <div className="border-2 p-2 rounded-md">
                    <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center py-6 rounded-md overflow-hidden">
                        <div className="hover:scale-110 duration-1000 transition-all ">
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
    )
};

export default Product;