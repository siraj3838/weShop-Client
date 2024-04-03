import { TypeAnimation } from "react-type-animation";
import ProductSlide from "../Shared/ProductSlide";
import { useState } from "react";
import useProducts from "../../Hook/useProducts";
import Loading from "../Shared/Loading";
import Product from "../../components/Product";

const AllProducts = () => {
    const [isSeeMore, setIsSeeMore] = useState(false);
    const [products] = useProducts();
    return (
        <div>
            <div className="xl:py-16 xl:[100px] 2xl:px-[200px] bg-[#fff] px-5">
                <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-500 mb-4 text-center"> <span className=" bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text">
                    <TypeAnimation
                        sequence={[
                            'All Products', // Types 'One'
                            1000, // Waits 1s
                            'Our Products', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </span></h2>
                {
                    products?.length == 0 ? <Loading></Loading> :
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6 pt-4">
                            {
                                isSeeMore ? products?.map(product => <Product product={product} key={product.title}></Product>)
                                    :
                                    products?.slice(0, 14)?.map(product => <Product product={product} key={product.title}></Product>)
                            }
                        </div>
                }
                <div className="flex justify-center mt-8">
                    <button onClick={() => setIsSeeMore(!isSeeMore)} className="bg-[#6B3FFB] py-3 px-7 text-white text-lg font-semibold rounded-lg">{isSeeMore ? 'See Less' : 'See More'}</button>
                </div>
            </div>
            <ProductSlide></ProductSlide>
            <div className="xl:py-16 xl:[100px] 2xl:px-[200px] bg-[#fff] px-5">
                <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-500 mb-4 text-center"> <span className=" bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text">
                    <TypeAnimation
                        sequence={[
                            'Favorite', // Types 'One'
                            1000, // Waits 1s // Waits 2s
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </span> Products</h2>
                {
                    products?.length == 0 ? <Loading></Loading> :
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 pt-4">
                            {
                                products?.slice(0, 5)?.map(product => <Product product={product} key={product.title}></Product>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllProducts;