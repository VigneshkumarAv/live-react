import React from "react";

const PromiseApi = () => {
  //promise.all, promise.allSettled, promise.race, promise.any

  const fetchData1 = async () => {
    const userUrl = `https://jsonplaceholder.typicode.com/sers/1`; // u intentionally removed in users add when needed
    const postsUrl = `https://jsonplaceholder.typicode.com/users/1/posts`;
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=1`;
    try {
      const data = await Promise.allSettled([
        fetch(userUrl).then((res) => {
          if (!res.ok) throw new Error("Api Failed");
          return res.json();
        }),
        fetch(postsUrl).then((res) => {
          if (!res.ok) throw new Error("Api Failed");
          return res.json();
        }),
        fetch(commentsUrl).then((res) => {
          if (!res.ok) throw new Error("Api Failed");
          return res.json();
        }),
      ]);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  fetchData1()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  //parallel
  const fetchData = async () => {
    const userUrl = `https://jsonplaceholder.typicode.com/users/1`;
    const postsUrl = `https://jsonplaceholder.typicode.com/users/1/posts`;
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=1`;
    try {
      const [user, posts, comments] = await Promise.all([
        fetch(userUrl).then((res) => res.json()),
        fetch(postsUrl).then((res) => res.json()),
        fetch(commentsUrl).then((res) => res.json()),
      ]);
      return { user, posts, comments };
    } catch (error) {
      console.log(error);
    }
  };

  fetchData()
    .then((data) => {
      console.log(data.user);
      console.log(data.posts);
      console.log(data.comments);
    })
    .catch((err) => {
      console.log(err);
    });

  //sequential
  const fetchSeqData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const jsonData = await response.json();
      const response1 = await fetch(
        `https://jsonplaceholder.typicode.com/users/${jsonData.id}/posts`
      );
      const jsonData1 = await response1.json();
      console.log(jsonData1);
    } catch (error) {
      console.log(error);
    }
  };
  fetchSeqData();

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P1 Success");
    }, 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("P2 Success");
      reject("P2 fail");
    }, 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P3 Success");
    }, 2000);
  });

  Promise.all([p1, p2, p3])
    .then((res) => {
      console.log("promise.all", res);
    })
    .catch((err) => {
      console.error("promise.all", err);
    });

  Promise.allSettled([p1, p2, p3])
    .then((res) => {
      console.log("promise.allSettled", res);
    })
    .catch((err) => {
      console.error("promise.allSettled", err);
    });

  Promise.race([p1, p2, p3])
    .then((res) => {
      console.log("promise.race", res);
    })
    .catch((err) => {
      console.error("promise.race", err);
    });

  Promise.any([p1, p2, p3])
    .then((res) => {
      console.log("promise.any", res);
    })
    .catch((err) => {
      console.error("promise.any", err);
    });

  return <div></div>;
};

export default PromiseApi;
