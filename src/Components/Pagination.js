import React, { useState } from "react";

const Pagination = () => {
  const data = [
    { name: "vignesh", age: 27, id: 1 },
    { name: "rolex", age: 15, id: 2 },
    { name: "head", age: 34, id: 3 },
    { name: "virat", age: 35, id: 4 },
    { name: "cummins", age: 37, id: 5 },
    { name: "starc", age: 36, id: 6 },
    { name: "bravo", age: 40, id: 7 },
    { name: "butler", age: 35, id: 8 },
    { name: "salt", age: 33, id: 9 },
    { name: "dhoni", age: 42, id: 10 },
    { name: "vignesh", age: 27, id: 1 },
    { name: "rolex", age: 15, id: 2 },
    { name: "head", age: 34, id: 3 },
    { name: "virat", age: 35, id: 4 },
    { name: "cummins", age: 37, id: 5 },
  ];
  const [currPage, setcurrPage] = useState(1);
  const perPage = 5;
  const pages = [1, 2, 3, 4, 5];
  const updatedData = data.slice((currPage - 1) * perPage, currPage * perPage);
  const handlePages = (page) => {
    setcurrPage(page);
  };

  return (
    <>
      {/* <ul>
        {updatedData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
      <div className="pagination-container">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {updatedData.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </table>
      </div>
      <div style={{ textAlign: "center" }}>
        {pages.map((page) => (
          <button onClick={() => handlePages(page)}>{page}</button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
