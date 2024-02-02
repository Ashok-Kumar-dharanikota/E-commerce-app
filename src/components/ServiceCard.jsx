import shippingIcon from '../assets/icon-shipping.svg'

const ServiceCard = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-center items-center gap-2'>

        <div className=' bg-gray-50 w-14 h-14 flex justify-center items-center rounded-xl'>
            <img src={shippingIcon} width={16} height={16} alt="" />
        </div>

        <div className=' flex flex-col gap-2'>
            <h1 className=' font-semibold text-sm'>Free shiping</h1>
            <p className=' text-xs font-light'>Over $29.00</p>
        </div>

    </div>
  )
}

export default ServiceCard