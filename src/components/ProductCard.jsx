import PropTypes from 'prop-types';


const ProductCard = ({ product }) => {

  return (
    <div className=' flex flex-col gap-3'>

      <div className=' min-w-32 min-h-52 md:min-w-32 md:min-h-96 bg-gray-100 rounded-3xl p-3 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${product.bgImage})` }}>
        <div className=' bg-white flex items-center justify-center font-semibold px-6 w-10 h-6 rounded-3xl'>{product.discount}</div>
      </div>

      <h1 className=' font-semibold line-clamp-1'>{product.name}</h1>
      <p className=' font-light line-clamp-2'>{product.description}</p>
      <span className=' text-xs font-bold'>{product.price}</span>


    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.any.isRequired,
};


export default ProductCard;