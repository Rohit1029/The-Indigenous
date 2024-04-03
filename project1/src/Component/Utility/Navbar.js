import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faGlobe,
  faFileLines,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/");
  };

  const handleRead = () => {
    navigate("/DisplayPage");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary h-10">
      <div className="container-fluid ">
        <div>
          <button
            className="  overflow-hidden border-less mx-2 btn btn-outline-dark"
            type="submit"
            role="button"
            aria-pressed="true"
            onClick={handleSearch}
          >
            <FontAwesomeIcon className="globe" icon={faGlobe} size="lg" />
            <span>Research</span>
          </button>
          <button
            className=" border-less mx-2 btn btn-outline-dark"
            type="submit"
            onClick={handleRead}
          >
            <FontAwesomeIcon icon={faFileLines} flip="vertical" size="lg" />
          </button>
          <button
            className="overflow-hidden  border-less mx-2 btn btn-outline-dark"
            type="submit"
          >
            <FontAwesomeIcon icon={faQuoteRight} size="lg" />
          </button>
        </div>
        <button className="border-less mx-2 btn btn-outline-dark" type="submit">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
