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
        <section className='w-screen h-screen px-10 flex flex-col gap-5'>

            <h1>Total Price: {totalPrice}</h1>

            {totalPrice !== 0 &&
                productList.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))
            }

        </section>
    );
};

export default Cart;
