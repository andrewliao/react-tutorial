import { BrowserRouter, Route, Routes} from "react-router-dom";
import EditCourseForm from './EditCourseForm'
import CourseList from "./CourseList";

const EditCourse = ({courses, selected, toggleSelected}) =>{
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<CourseList courses={courses} selected={selected} toggleSelected={toggleSelected}/>}/>
            <Route path="/edit/:term/:id" element={<EditCourseForm courses={courses}/>}/>
        </Routes>
    </BrowserRouter>)
}
export default EditCourse;