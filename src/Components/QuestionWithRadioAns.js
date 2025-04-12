import React, { useState } from "react";

const QuestionWithRadioAns = () => {
  //const [value, setValue] = useState("Javascript");
  const [selectedRadio, setSelectedRadio] = useState("");
  const handleChange = (e) => {
    const { value, checked } = e.target;
    setSelectedRadio(value);
  };

  return (
    <div>
      <h2>MCQ questions</h2>
      Which program
      <label htmlFor="javascript">Javascript</label>
      <input
        type="radio"
        name="answer"
        value="javascript"
        checked={selectedRadio === "javascript"}
        onChange={handleChange}
      />
      <label htmlFor="python">Python</label>
      <input
        type="radio"
        name="answer"
        value="python"
        checked={selectedRadio === "python"}
        onChange={handleChange}
      />
      <label htmlFor="Java">Java</label>
      <input
        type="radio"
        name="answer"
        value="java"
        checked={selectedRadio === "java"}
        onChange={handleChange}
      />
      <div>{"Your answer is " + selectedRadio}</div>
    </div>
  );
};

export default QuestionWithRadioAns;
