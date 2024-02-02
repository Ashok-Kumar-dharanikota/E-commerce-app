/* eslint-disable react/prop-types */
import arrow from '../assets/icon-arrow.svg'

const HeroCard = ({ hero }) => {
  return (
      <div className={`${hero.style} min-w-32 min-h-32 bg-gray-200 rounded-3xl flex justify-end items-end p-4`} >
        <img src={arrow} width={16} height={16} alt="" />
      </div>
  )
}

export default HeroCard