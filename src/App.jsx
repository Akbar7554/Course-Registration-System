import { useState } from 'react'
import './App.css'
import CourseInformation from './Components/CourseInformation/CourseInformation'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [selectItems, setSelectItems] = useState([]);
  const [remainingHour, setRemainingHour] = useState(20);
  const [costTotalHour, setCostTotalHour] = useState(0);
  // const [totalPrice] = useState(0);
  const handleSelectItems = course => {
    // console.log(course);
    const isHere = selectItems.find(CourseHere => CourseHere.id == course.id);
    let count = course.courseHour;
    // let price = course.coursePrice;
    if(isHere){
      return toast.warn("You Can't Select Multiple Courses!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else{
      selectItems.forEach(CourseHere => {
        count = count + CourseHere.courseHour;
        // price = price + CourseHere.coursePrice;
        // console.log(price);
      })
      // console.log(count);
      const totalRemainingHour = 20 - count;
      if(count > 20)
      {
        return toast.warn("Total Course Hour Limit Exist!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      else{
          setCostTotalHour(count);
          // console.log(totalRemainingHour);
          setRemainingHour(totalRemainingHour);
          const newSelectItems = [...selectItems, course];
          setSelectItems(newSelectItems);
      }
    }
  }
  return (
    <>
        <Header></Header>
        <ToastContainer></ToastContainer>
        <div className='flex gap-10 w-[90%] mx-auto mb-20'>
            <Courses handleSelectItems={handleSelectItems}></Courses>
            <CourseInformation 
            selectItems={selectItems}
            remainingHour={remainingHour}
            costTotalHour={costTotalHour}
            ></CourseInformation>
        </div>
    </>
  )
}

export default App
