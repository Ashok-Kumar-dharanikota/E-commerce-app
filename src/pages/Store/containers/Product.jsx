import { Rating } from '@mui/material';
import PropTypes from 'prop-types';

const Product = ({ product }) => {

    const discountedPrice = Math.round(product.original_price - (product.original_price * product.discount) / 100);



    return (
        <div className=' flex flex-col gap-3'>

            <div className=' min-w-32 min-h-52 md:min-w-32 md:min-h-96 bg-gray-100 rounded-3xl p-3 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${product.image})` }}>
                <div className=' bg-white flex items-center justify-center font-semibold px-2 w-fit h-6 rounded-3xl'>{product.discount}% off</div>
            </div>

            <h1 className=' font-semibold line-clamp-1'>{product.name}</h1>
            <p className=' font-light line-clamp-2' >{product.description}</p>
            <div className=' flex justify-between items-center md:flex-row-reverse  flex-wrap'>
                <div className=' flex items-center gap-1'>
                    <p className=' font-semibold'>{product.rating}</p>
                    <Rating defaultValue={product.rating} precision={0.1} />
                </div>
                <div className=' flex gap-2 items-end'>
                    <span className=' text-xl font-medium'>${discountedPrice}</span>
                    <span className=' text-xs font-semibold line-through text-gray-400'>{product.original_price}</span>
                </div>
            </div>


        </div>
    )
}

Product.propTypes = {
    product: PropTypes.any.isRequired,
};


export default Product;