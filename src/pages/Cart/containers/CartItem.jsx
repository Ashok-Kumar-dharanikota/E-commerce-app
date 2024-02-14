import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addSelectedProduct, removeSelectedProduct } from '../../../redux/actions/productActions';

const CartItem = ({ item }) => {
  const discountedPrice = Math.round(item.original_price - (item.original_price * item.discount) / 100);
  const dispatch = useDispatch();

  return (

    <div className='  md:w-2/6 h-52 rounded-3xl flex p-5 gap-5 shadow-sm'>

      <img className=' rounded-2xl h-fit' src={item.image} width={100} alt="" />

      <div className=' flex flex-col gap-2'>
        <h1 className=' font-semibold line-clamp-1'>{item.name}</h1>
        <p className=' font-light line-clamp-2' >{item.description}</p>

        <div className=' flex items-end gap-2'>
          <span className=' text-xl font-medium'>${discountedPrice}</span>
          <span className=' text-xs font-semibold line-through text-gray-400'>{item.original_price}</span>
        </div>

        <div className=' flex gap-2 items-center'>
          <button className=' rounded-full w-10 bg-gray-100 flex items-center justify-center text-center font-extrabold' onClick={() => dispatch(removeSelectedProduct(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button className=' rounded-full w-10 bg-gray-100 flex items-center justify-center text-center font-extrabold' onClick={() => dispatch(addSelectedProduct(item.id))}>+</button>
        </div>
      </div>


    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.any.isRequired
}

export default CartItem;