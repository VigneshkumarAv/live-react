import React, { useState, useEffect } from "react";

const NestedObjRendering = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        console.log(jsonData);
        setUsers(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, []);
  const handleSelectedUsers = async (e) => {
    const selectedUser = e.target.value;
    if (!selectedUser) return;
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + selectedUser
      );
      const jsonData = await response.json();
      setUserDetails(jsonData);
    } catch (err) {
      console.log(err);
    }
  };
  const RecursiveUserData = ({ user }) => {
    if (typeof user !== "object" || user === null) {
      return <span>{String(user)}</span>;
    }
    return (
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>
            {typeof value === "object" ? (
              <RecursiveUserData user={value} />
            ) : (
              String(value)
            )}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <select onChange={handleSelectedUsers}>
        <option>--Choose--</option>
        {users &&
          users?.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
      </select>

      {userDetails && (
        <div>
          <h2>User Details:</h2>
          <RecursiveUserData user={userDetails} />
        </div>
      )}
    </div>
  );
};
export default NestedObjRendering;
