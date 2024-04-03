import React, { useState } from "react";

const ReadMoreLess = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text " style={{ cursor: "pointer" }}>
      {isReadMore ? text.slice(0, 200) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide"
        style={{ color: "green" }}
      >
        {isReadMore ? "...read more" : "    show less"}
      </span>
    </p>
  );
};

export default ReadMoreLess;
