import React, { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment } = useCounter(0);
  return (
    <div>
      <button onClick={increment}>Click</button>
      <p>{count}</p>
    </div>
  );
};
//if we use custom hooks it would be more readable and easy
// hoc
export const withCounter = (Component) => (props) => {
  //hoc
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return <Component count={count} increment={increment} {...props} />;
};

const ClickCounter = ({ count, increment }) => {
  return (
    <div>
      <button onClick={increment}>Click</button>
      <p>{count}</p>
    </div>
  );
};

const EnhancedClickCounter = withCounter(ClickCounter);
//example 2
export const UserList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <>
            <li>Name: {user.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export const withLoading = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return <Component {...props} />;
  };
};
const UserWithLoading = withLoading(UserList);
const Hoc = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setUsers([
        { name: "ram", age: 25 },
        { name: "raj", age: 60 },
      ]);
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(handler);
    };
  }, []);

  return (
    <div>
      <Counter />
      <EnhancedClickCounter />
      <UserWithLoading isLoading={isLoading} users={users} />
    </div>
  );
};

export default Hoc;
