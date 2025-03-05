import "../App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
/*  backend for frontend
  saml
  oauth
  authorization & authentication
  piral 
  docker
  docker compose
  docket network
   */
function Todo() {
  const [todos, settodos] = useState([]);
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const handleAdd = () => {
    if (!value.trim()) return;
    settodos([...todos, { name: value }]);
    setValue("");
  };
  const handleDelete = (item) => {
    let updatedTodos = todos.filter((data) => data.name !== item.name);
    settodos(updatedTodos);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleInput} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={uuidv4()}>
            {item.name}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
