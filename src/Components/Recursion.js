import React from "react";

/* in app we need to call recursion component and send this data*/
const data = {
  id: 1,
  name: "Parent",
  children: [
    { id: 2, name: "Child 1" },
    {
      id: 3,
      name: "Child 2",
      children: [{ id: 4, name: "Grandchild 1" }],
    },
  ],
};
<Recursion node={data} />;
/*  */
const Recursion = ({ node }) => {
  return (
    <div>
      <h2>{node.name}</h2>
      {node?.children?.map((child) => (
        <Recursion key={child.id} node={child} />
      ))}
    </div>
  );
};

export default Recursion;
