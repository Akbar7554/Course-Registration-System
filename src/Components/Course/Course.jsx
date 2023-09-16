import PropTypes from 'prop-types';
// import { BsBook } from 'react-icons/fa';
const Course = ({course, handleSelectItems}) => {
    // console.log(handleSelectItems);
    const {courseTitle, courseImage, courseDescription, coursePrice, courseHour} = course;
    // console.log(course);
    return (
        <div className='w-80 shadow-2xl rounded-xl text-[#1C1B1B]'>
            <img className='ml-5 mt-5' src={courseImage} alt={`Course Image ${courseImage}`}/>
            <h3 className='text-lg font-semibold mt-2 mb-2 ml-5'>{courseTitle}</h3>
            <p className='ml-5 mb-5 h-28 w-72 text-gray-500 text-sm'>{courseDescription}</p>
            <div className='flex justify-around font-medium mb-5'>
                <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-dollar-sign fa-lg"></i> 
                    <h2 className='text-gray-600'>Price : {coursePrice}</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-book-open fa-lg"></i>
                    {/* <a href=""><BsBook /></a> */}
                    <h2 className='text-gray-600'>Credit : {courseHour}hr</h2>
                </div>
            </div>
            <button onClick={() => handleSelectItems(course)} className='w-64 ml-8 mb-5 h-8 rounded-lg text-white bg-[#2F80ED] text-base font-semibold'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course : PropTypes.object.isRequired,
    handleSelectItems: PropTypes.func
}

export default Course;