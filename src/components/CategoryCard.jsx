import arrow from '../assets/icon-arrow.svg'
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {



    return (
        <div className={` ${category.style} min-w-32 min-h-52 text-white rounded-3xl p-5 flex flex-col  justify-end bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${category.bgImage})` }} >
            <div className=' mb-5'>
                <h1 className=' text-2xl font-bold'>{category.name}</h1>
                <p className=' font-light text-sm'>{category.description}</p>
            </div>

        </div>
    )
}

CategoryCard.propTypes = {
    category: PropTypes.any.isRequired,
};


export default CategoryCard;