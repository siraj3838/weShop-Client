
import emptyCart from '../../assets/emptyCart.png'
const EmptyOrder = () => {
    return (
        <div>
            <div className="pt-14 pb-8 md:py-8 px-5 xl:py-24 2xl:px-[400px]">
                <div className="flex justify-center items-center">
                    <img src={emptyCart} alt="" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-4">Your shopping basket is empty</h3>
                <h5 className="text-lg text-center text-gray-400">We invite you to explore our curated collection and discover the perfect items to elevate your lifestyle. With our commitment to quality and customer satisfaction, we're confident you'll find something you love.</h5>
            </div>
        </div>
    );
};

export default EmptyOrder;