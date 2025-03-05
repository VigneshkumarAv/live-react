import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
