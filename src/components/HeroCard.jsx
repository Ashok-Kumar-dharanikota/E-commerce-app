import arrow from '../assets/icon-arrow.svg'
import PropTypes from 'prop-types';

const HeroCard = ({ hero }) => {

  
  return (
      <div className={`${hero.style} min-w-32 min-h-32 bg-gray-200 rounded-3xl flex justify-end items-end p-4`} >
        <img src={arrow} width={16} height={16} alt="" />
      </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.any.isRequired,
};


export default HeroCard;