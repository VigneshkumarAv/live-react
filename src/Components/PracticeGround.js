import React, { useEffect, useRef, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import "../App.css";

const PracticeGround = () => {
  return (
    <>
      <FormWithValidation />
    </>
  );
};
const CounterWithDataPersist = () => {
  const [counter, setCounter] = useState(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });

  const handleIncrement = () => {
    setCounter((count) => count + 1);
  };
  const handleDecrement = () => {
    setCounter((count) => (count > 0 ? count - 1 : count));
  };
  const handleReset = () => {
    setCounter(0);
  };
  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      Counter: {counter}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
const TodoWithCrud = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const handleAdd = () => {
    if (!inputRef.current?.value?.trim()) return;
    setTodos((prev) => [
      ...prev,
      { name: inputRef.current?.value, completed: false },
    ]);
    setTimeout(() => {
      inputRef.current.value = "";
    }, 500);
  };
  const handleCompleted = (todo) => {
    /* const tempTodos = [...todos];
    tempTodos[index].completed = !tempTodos[index].completed;
    setTodos(tempTodos); */
    const tempTodos = todos.map((item) =>
      item.name === todo.name ? { ...item, completed: !item.completed } : item
    );
    setTodos(tempTodos);
  };
  const handleDelete = (todo) => {
    const updatedTodo = todos.filter((item) => item.name !== todo.name);
    setTodos(updatedTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <section>
        <input type="text" ref={inputRef} />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {todos.length > 0 &&
            todos?.map((todo, index) => (
              <li>
                {!todo.completed ? todo.name : <del>{todo.name}</del>}{" "}
                <button onClick={() => handleCompleted(todo)}>Done</button>
                <button onClick={() => handleDelete(todo)}>Delete</button>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
const SearchList = () => {
  const [value, setValue] = useState("");
  const data = [
    "alex in wonderland",
    "london is in UK",
    "time is precious",
    "kalam is good hearted person",
    "project is interesting",
  ];
  const [suggestions, setSuggestions] = useState(data);

  const handleInput = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value?.trim() === "") {
        setSuggestions(data);
      } else {
        let tempSuggestions = suggestions.filter((suggestion) =>
          suggestion?.toLowerCase().includes(value?.toLowerCase())
        );
        setSuggestions(tempSuggestions);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  return (
    <>
      <input type="text" value={value} onChange={handleInput} />
      <ul>
        {suggestions?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
const ParentForModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={handleOpen}>Click to open Modal</button>
      {isOpen && (
        <Modal
          heading={"Hello Modal"}
          content={"reusable modal is created"}
          //isOpen={isOpen}
          handleClose={handleClose}
        />
      )}
      {/* <SearchList /> */}
      {/* <TodoWithCrud /> */}
      {/* <CounterWithDataPersist /> */}
    </div>
  );
};
const Modal = ({ heading, content, handleClose }) => {
  let modalRef = useRef(null);

  useEffect(() => {
    const handleModal = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleModal);
    return () => document.removeEventListener("mousedown", handleModal);
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <div className="overlay">
          <div className="modal" ref={modalRef}>
            <h1>{heading}</h1>
            <p>{content}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
const TabsComponent = (/* { tabs } */) => {
  const tabs = [
    { label: "Tab1", content: <div>Tab1 content</div> },
    { label: "Tab2", content: <div>Tab2 content</div> },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <h3 onClick={() => handleClick(index)}>{tab.label}</h3>
        ))}
      </div>
      <hr />
      <div>{tabs[activeIndex].content}</div>
    </>
  );
};
const UserList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const handleApi = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    handleApi();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <ul>
      {data?.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
};
const UserListPost = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }
      const data = await response.json();
      setMessage(`user id created ${data.id}`);
      nameRef.current.value = "";
      emailRef.current.value = "";
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <input type="email" ref={emailRef} />
      <button type="submit">Submit</button>
      {message && <div>{message}</div>}
    </form>
  );
};
function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceValue;
}
const DebounceSearch = () => {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 300);
  useEffect(() => {
    if (debounceQuery)
      console.log("Api call with debounce query" + debounceQuery);
  }, [debounceQuery]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return { count, increment, decrement };
};
const Counter = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <>
      counter:{count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
const AutoCompleteWithApi = () => {
  const [value, setValue] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (value?.trim() === "") {
        setAutoComplete([]);
      } else {
        try {
          const response = await fetch(
            "https://api.github.com/search/users?q=" + value
          );
          if (!response.ok) {
            throw new Error("Unable to retrieve data");
          }
          const jsonData = await response.json();
          //let data = jsonData.filter((item) => item.login.includes(value));
          setAutoComplete(jsonData.items);
        } catch (error) {
          console.log(error.message);
        }
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return (
    <>
      <input type="text" value={value} onChange={handleInputChange} />
      <ul>
        {autoComplete?.map((item) => (
          <li>{item.login}</li>
        ))}
      </ul>
    </>
  );
};
const InfiniteScroll = () => {
  const [list, setList] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const handler = async () => {
      if (page <= 10) {
        setLoading(true);
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_page=" + page
          );
          if (!response.ok) {
            throw new Error("unable to fetch data");
          }
          const jsonData = await response.json();
          setList((prev) => [...prev, ...jsonData]);
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      }
    };
    handler();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setpage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 } //triggers when the sentinel is fully in view
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <ul>
        {list.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
      <div ref={observerRef} style={{ height: "10px" }}></div>
    </>
  );
};
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#222" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
};
const FormWithValidation = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formValue.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formValue.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formValue.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    if (validate()) {
      alert("Form Validated Successfully");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} autocomplete="off">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          placeholder="Enter Email"
          autocomplete="off"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
/* const obj = {
  "Arsenal FC":23,
  "Manchester": 50,
  "Barcelona": 30,
  "Ronaldo":90
};
let max =0,output="";
for(let [key,value] of Object.entries(obj)){
  if(value>max){
      max = value;
      output=key;
  }
} */
/* function charCounter(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  return "None";
}
console.log(charCounter("swiss"));
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function test() {
  console.log("first call");
  await delay(2000);
  console.log("last call");
}
test(); */
/* flatted array
const array = [1, [2, [3, 4], 5], 6]

const handleArr = (arr) => {
        return arr.reduce((acc,curr)=> {
            if(Array.isArray(curr)){
                acc = [...acc, ...handleArr(curr)]; 
            }else {
                acc = [...acc, curr];
            }
            return acc;
        },[])
}
const output = handleArr(array); */
/* const arr = [1, 2, 4, 5];
function findMissingNumber(array, itemsLength) {
  const n = itemsLength;
  const expectedSum = (n * (n + 1)) / 2;
  const acutalSum = array.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - acutalSum;
}
console.log(findMissingNumber(arr, 5));
 */
//first non-repeating char

/*
const str = "swiss";
 let charCount = {};

for(let char of str){
    charCount[char] = charCount[char]? charCount[char]+1:1;
}
for(let char of str){
    if(charCount[char]===1) {console.log(char);return;}
} */

export default PracticeGround;
