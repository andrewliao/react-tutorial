import React, { useState } from "react";
import Course from "./Course.jsx";
import { getCourseTerm, terms } from "../utilities/time";
import Modal from "./Modal.jsx";

const TermSelector = ({ term, setTerm }) => (
  <div className="btn-group">
    {Object.values(terms).map((value) => (
      <TermButton
        key={value}
        term={value}
        setTerm={setTerm}
        checked={value === term}
      />
    ))}
  </div>
);

const TermButton = ({ term, setTerm, checked }) => (
  <>
    <input
      type="radio"
      id={term}
      className="btn-check"
      checked={checked}
      autoComplete="off"
      onChange={() => setTerm(term)}
    />
    <label class="btn btn-success m-1 p-2" htmlFor={term}>
      {term}
    </label>
  </>
);

const CourseList = ({ courses }) => {
    const [term, setTerm] = useState("Fall");
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const termCourses = Object.values(courses).filter(
      (course) => term === getCourseTerm(course)
    );

    const toggleSelected = (item) => setSelected(
      selected.includes(item)
      ? selected.filter(x => x !== item)
      : [...selected, item]
    );
  
  return (
    <>
      <TermSelector term={term} setTerm={setTerm} />
      <div className="course-list">
        {termCourses.map((course) => (
          <Course
            key={course.id}
            course={course}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>

      <button className="btn btn-outline-dark" onClick={openModal}>Course Plan</button>
        <Modal open={open} close={closeModal}>
          {selected.map(select => <div>
            {select.title}
            {select.title}
            {select.meets}
            <hr></hr>
          </div>
          )}
        </Modal>
    </>
  );
};

export default CourseList;