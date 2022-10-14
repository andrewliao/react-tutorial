import { useState } from 'react';
import CourseList from "./CourseList";
import Modal from './Modal';
import Course from './Course';

const ProductPage = ({courses}) => {
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={openModal}>Course Plan</button>
      <Modal open={open} close={closeModal}>
        <Course selected={selected} />
      </Modal>
      <CourseList courses={courses} selected={selected} toggleSelected={toggleSelected} />
    </div>
  );
};

export default ProductPage;
