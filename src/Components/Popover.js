import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import ReactDOM from "react-dom";

const Popover = ({ contents, children }) => {
  const popOverRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handlePopOver = () => {
    setIsOpen(!isOpen);
  };
  const handleEvent = (e) => {
    if (
      popOverRef.current &&
      !popOverRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleEvent);
    return () => {
      document.removeEventListener("click", handleEvent);
    };
  }, []);

  return (
    <div className="popover-container">
      <button
        onClick={handlePopOver}
        className="popover-trigger"
        ref={buttonRef}
      >
        {children}
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="popover" ref={popOverRef}>
            <div className="popover-content">{contents}</div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Popover;
