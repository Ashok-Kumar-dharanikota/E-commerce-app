
const ProductCard = () => {
  return (
    <div className=' flex flex-col gap-3'>

        <div className=' min-w-32 min-h-52 bg-gray-100 rounded-3xl p-3'>
            <div className=' bg-white w-10 h-6 rounded-3xl'></div>
        </div>

        <h1 className=' font-semibold'>Product</h1>
        <p className=' font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
        <span className=' text-xs font-bold'>$499.99 USD</span>


    </div>
  )
}

export default ProductCard