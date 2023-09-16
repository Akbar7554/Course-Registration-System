import PropTypes from 'prop-types';
import ShowCourse from '../ShowCourse/ShowCourse';
const CourseInformation = ({selectItems, remainingHour, costTotalHour}) => { 
    return (
        <div className="shadow-2xl rounded-xl p-5 h-1/3 text-sm w-96">
            {/* <h2>Select Title : {selectItems.length}</h2> */}
            <h1 className='text-[#2F80ED] text-2xl font-bold mb-3'>Credit Hour Remaining {remainingHour}hr</h1>
            <hr className='font-bold mb-3'></hr>
            <h1 className='text-2xl font-bold mb-2'>Course Name</h1>
            {
                
                selectItems.map((selectItem, index) => <ShowCourse key={selectItem.id} showCourse={selectItem} index={index}></ShowCourse>)
            }
            <hr className='font-bold mb-3 mt-3'></hr>
            <h1 className='text-xl  mb-2'>Total Credit Hour : {costTotalHour}hr</h1>
            <hr className='font-bold mb-3'></hr>
            <h1 className='text-xl font-bold mb-2'>Total Price : 48000 USD</h1>

        </div>
    );
};

CourseInformation.propTypes = {
    selectItems: PropTypes.array,
    remainingHour: PropTypes.object,
    costTotalHour: PropTypes.object
}

export default CourseInformation;