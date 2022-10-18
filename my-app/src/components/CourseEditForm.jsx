import { useFormData } from "../utilities/useFormData";
import { useNavigate } from "react-router-dom";


const validateUserData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
      return (/^[\s]*$/.test(val) || /(M|Tu|W|Th|F)+ (\d\d?)+:(\d\d)+-(\d\d?)+:(\d\d)/.test(val)) ? '' : 'must contain days and start-end, e.g., MWF 12:00-13:20';
    default: return '';
  }
};

const InputField = ({ name, text, state, change }) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {text}
    </label>
    <input
      className="form-control"
      id={name}
      name={name}
      defaultValue={state.values?.[name]}
      onChange={change}
    />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({ message, disabled }) => {
  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-outline-dark me-2"
        onClick={() => console.log("HI")}
      >
        Cancel
      </button>
      <span className="p-2">{message}</span>
    </div>
  );
};

export const CourseEditForm = ({ courses, id }) => {
  const course = courses[id];
  const [state, change] = useFormData(validateUserData, course);
  const submit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      className={state.errors ? "was-validated" : null}
    >
      <InputField
        name="title"
        text="Course Title"
        state={state}
        change={change}
      />
      <InputField
        name="meets"
        text="Meeting Time"
        state={state}
        change={change}
      />
      <ButtonBar />
    </form>
  );
};