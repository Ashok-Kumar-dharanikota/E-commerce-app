import arrow from '../assets/icon-arrow.svg'
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {



    return (
        <div className={` ${category.style} min-w-32 min-h-32 bg-gray-100 rounded-3xl p-10 flex flex-col justify-end gap-2`} >
            <h1 className=' text-2xl font-medium'>Category</h1>
            <p className=' font-light'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</p>
            <div className='flex gap-3 mt-5'>
                <h1>Explore category</h1>
                <img className=' mt-1' src={arrow} alt="" />
            </div>
        </div>
    )
}

CategoryCard.propTypes = {
    category: PropTypes.any.isRequired,
};


export default CategoryCard;