import React from "react";
import PropTypes from "prop-types";
const Btn = ({ onClick, type, children, className}) => {
  return (
    <button  
      onClick={onClick}
      type={type}
      className={`${className} active:scale-90 text-sm text-Green font-medium outline outline-1 px-8 py-2 duration-500 hover:bg-Gren-hover`}
    >
      {children}
    </button>
  );
};

export default Btn;
