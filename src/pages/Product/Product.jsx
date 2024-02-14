import { useParams } from 'react-router-dom'
import { allproducts } from '../../data/data';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';
import { Rating } from '@mui/material';

const Product = () => {

    let { id } = useParams();
    const product = allproducts.find((product) => product.id === id);
    const discountedPrice = Math.round(product.original_price - (product.original_price * product.discount) / 100);

    const dispatch = useDispatch();

    return (
        <section className=' px-10 py-10 flex flex-col items-center w-screen h-screen'>
            <div className='flex md:flex-row flex-col gap-10 h-full w-screen px-10 md:px-20 '>

                <div className='md:w-2/6 h-5/6 min-h-52 md:min-w-32  rounded-3xl p-3 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${product.image})` }}>
                    <div className=' bg-white flex items-center justify-center font-semibold px-2 w-fit h-6 rounded-3xl'>{product.discount}% off</div>
                </div>

                <div className=' flex flex-col gap-3 md:w-1/4'>
                    <h1 className=' font-semibold line-clamp-1 text-2xl'>{product.name}</h1>
                    <p className=' font-light w-52 text-sm' >{product.description}</p>
                    <div className=' flex items-center gap-1'>
                        <Rating defaultValue={product.rating} precision={0.1} />
                        <p className=' font-semibold'>{product.rating}</p>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <div className=' flex gap-2 items-end'>
                            <span className=' text-xl font-medium'>${discountedPrice}</span>
                            <span className=' text-xs font-semibold line-through text-gray-400'>{product.original_price}</span>

                        </div>

                        <button onClick={() => dispatch(setProducts(product))} className=' bg-blue-600 text-white px-7 py-3'>Add to cart +</button>

                    </div>
                </div>


            </div>

        </section>
    )
}

export default Product;