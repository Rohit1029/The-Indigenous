import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBookmark } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary h-10">
      <div className="container-fluid ">
        <div>
          <button
            className="overflow-hidden border-less mx-2 btn btn-outline-dark"
            type="submit"
          >
            <FontAwesomeIcon className="globe" icon={faBookmark} size="lg" />
            <span>Bookmarks</span>
          </button>
        </div>
        <button className="border-less mx-2 btn btn-outline-dark" type="submit">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>
      </div>
    </nav>
  );
};

export default Footer;
