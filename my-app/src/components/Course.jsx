import React from "react";

import { getCourseNumber, getCourseTerm, hasConflict} from "../utilities/time";
import { Link } from 'react-router-dom'
import { CourseEditForm } from "./CourseEditForm";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


const CourseEditFormForUrl = ({ courses }) => {
  const [visible, setVisible] = React.useState(false);
  const { id } = useParams();
  return <div>
    <button onClick={() => setVisible(!visible)}>{visible ? 'Close Course Form' : 'Edit Course Form'}</button>
      <div style={{display: visible ? 'block' : 'none'}}><CourseEditForm courses={courses} id={id} /> </div>
    </div>;
};

const Course = ({ course, selected, setSelected }) => {
  const isSelected = selected.includes(course);
  const toggle = (x, lst) =>
    lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

  const isDisabled = !isSelected && hasConflict(course, selected);

  const style = {
    backgroundColor: isDisabled
      ? "lightgrey"
      : isSelected
      ? "#B0E5A4"
      : "white",
  };
  return (
    <div
      className="card m-1 p-2"
      style={style}
      onClick={isDisabled ? null : () => setSelected(toggle(course, selected))}
    >
      <div className="card-body">
        <div className="card-title">
          {getCourseTerm(course)} CS {getCourseNumber(course)}
        </div>
        <div className="card-text">{course.title}</div>
        <hr></hr>
        <div className="card-text-2">{course.meets}</div>
      </div>

        <CourseEditFormForUrl courses={course} />
    </div>
  );
};

export default Course;