import React, { useEffect, useState } from "react";

const FetchApi = () => {
  //https://jsonplaceholder.typicode.com/posts?_page=1
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    /* fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP Error");
        }
        return res.json();
      })
      .then((result) => setData(result))
      .catch((err) => {
        console.error(err);
      }); */
    const fetchData = async () => {
      try {
        // async/await is a syntatic sugar over promises
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_page=" + page
        );
        const jsonData = await response.json();
        setData((prevData) => [...prevData, ...jsonData]);
        //setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page]);

  const handlePage = (button) => {
    if (button === "Previous") {
      setPage((prev) => prev - 1);
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const updatedData = data.map((item) => (
    <li key={item.id}>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
    </li>
  ));

  return (
    <div>
      <label>
        Name:
        <br />
        <input id="name" type="checkbox" />
      </label>

      <ul>
        {updatedData} {/* Type 3 */}
        {/* {data.map((item) => ( //type 1
          <li key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </li>
        ))} */}
        {/*         {data.map((item) => {  //type2
          return (
            <li key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </li>
          );
        })} */}
      </ul>
      {/*       <button onClick={() => handlePage("Previous")}>Previous</button>
      <button onClick={() => handlePage("Next")}>Next</button> */}
      <button onClick={handlePage}>View More</button>
    </div>
  );
};

export default FetchApi;

/*  export function setup(app: PiletApi) {
  app.registerTile("Mario", () => <Link to="/mario">Mario</Link>,{
    initialColumns: 2,
    initialRows: 2
  });
  app.registerPage("/mario", MarioComponent);
}
 */
