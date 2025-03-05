import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const timeoutRef = useRef(null);

  const fetchData = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`
      );
      setData((prev) => [...prev, ...response.data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleScroll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      //throttling
      const scrolHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition >= scrolHeight - 10 && !loading)
        setPage((prevPage) => prevPage + 1);
    }, 400);
  }, [loading]); //whenever loading change, only then this should be recreated or it will use memoized function

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
