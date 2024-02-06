import PropTypes from 'prop-types';

const ServiceCard = ({ service, icon }) => {



  return (
    <div className=' flex flex-col md:flex-row justify-center items-center gap-2'>

        <div className=' bg-gray-50 w-14 h-14 flex justify-center items-center rounded-xl'>
            <img src={icon} width={24} height={24} alt="" />
        </div>

        <div className=' flex flex-col gap-2 text-center'>
            <h1 className=' font-semibold text-sm'>{service.name}</h1>
            <p className=' text-xs font-light'>{service.service}</p>
        </div>

    </div>
  )
}

ServiceCard.propTypes = {
  service: PropTypes.any.isRequired,
  icon: PropTypes.string
};


export default ServiceCard;