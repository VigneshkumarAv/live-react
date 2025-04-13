import React, { Children, useState } from "react";

/* Need to add it in app */
const menu = {
  label: "Home",
  children: [
    { label: "About" },
    {
      label: "Services",
      children: [{ label: "Web" }, { label: "Mobile" }],
    },
  ],
};

<RenderMenu menu={menu} />;
/* --- */
const RenderMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleItem = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h2 key={menu.label} onClick={() => handleItem()}>
        {menu.label}
      </h2>

      {isOpen &&
        menu.children.map((child) => (
          <RenderMenu key={child.label} menu={child} />
        ))}
    </div>
  );
};

export default RenderMenu;
