import React from "react";
import PropTypes from "prop-types";

function TodoForm({ value, onChange, submitForm, name }) {
  return (
    <form onSubmit={submitForm}>
      <input name={name} type="text" value={value} onChange={onChange} />
      <input type="submit" value="Add Todo" />
    </form>
  );
}

TodoForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default TodoForm;
