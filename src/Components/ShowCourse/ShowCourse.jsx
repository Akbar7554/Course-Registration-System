import PropTypes from 'prop-types';
const ShowCourse = ({showCourse, index}) => {
    const {courseTitle} = showCourse;
    return (
        <ol>
            <li className='text-lg font-medium text-gray-500'>{++index}. {courseTitle}</li>
        </ol>
        
    );
};
ShowCourse.propTypes = {
    showCourse : PropTypes.object,
    index : PropTypes.index
}
export default ShowCourse;