import arrow from '../assets/icon-arrow.svg'
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {



    return (
        <div className={` ${category.style} min-w-32 min-h-52 text-white rounded-3xl p-5 flex flex-col justify-end bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${category.bgImage})` }} >
            <h1 className=' text-xl font-bold'>{category.name}</h1>
            <p className=' font-light text-xs'>{category.description}</p>
            <div className="text-gray-900 mt-5 cursor-pointer bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm px-3 py-2 md:px-5 md:py-3.5 w-fit flex items-center justify-center font-semibold gap-5 me-2 md:mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                <h1>Explore</h1>
                <img className='' src={arrow} alt="" />
            </div>

        </div>
    )
}

CategoryCard.propTypes = {
    category: PropTypes.any.isRequired,
};


export default CategoryCard;