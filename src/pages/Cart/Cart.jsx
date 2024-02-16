import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './containers/CartItem';
import { removeAllProducts } from '../../redux/actions/productActions';

const Cart = () => {
    const productList = useSelector((state) => state.allproducts.cart);
    const dispatch = useDispatch();

    function calculateTotalPrice(products) {
        let totalPrice = 0;
        products.forEach(product => {
            totalPrice += Math.round(product.original_price - (product.original_price * product.discount) / 100) * product.quantity
        });
        return totalPrice;
    }

    const totalPrice = calculateTotalPrice(productList);

    useEffect(() => {
        if (totalPrice === 0) {
            dispatch(removeAllProducts([]));
        }
    }, [totalPrice, dispatch]);


    return (
        <section className='w-screen h-screen px-10 flex flex-col justify-between '>

            <div>
                <h1 className=' text-2xl font-semibold'>Your  Shopping Bag</h1>
                <div className=' flex flex-col md:flex-row flex-wrap gap-3'>

                    {totalPrice !== 0 &&
                        productList.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>

            <div className=' h-32 shadow-md flex items-center justify-between md:justify-around px-5 md:px-20 md:gap-10'>
                <h1 className=' md:text-3xl font-medium text-sm'>Total Price : $ {totalPrice}</h1>
                <button className=' bg-blue-600 text-white px-10 py-3'>Order</button>
            </div>

        </section>
    );
};

export default Cart;
