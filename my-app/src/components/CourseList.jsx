const CourseList = (
    {courses}
    ) => (
    <div>
      { Object.entries(courses).map(([key, value]) => <div>{value.term} CS {value.number}: {value.title}</div>) }
    </div>
  );
  
  export default CourseList;