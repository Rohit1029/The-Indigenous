import React, { useState } from "react";
import Main from "../Utility/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { createSearchParams, useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [input, setInput] = useState("");
  const handleSearch = () => {
    navigate({
      pathname: "/DisplayPage",
      search: createSearchParams({ id: `${input}` }).toString(),
    });
  };

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <Main>
        <div className="search">
          <div classname=" ">
            <div className="search-box">
              <button
                className="  overflow-hidden border-less mx-2 btn btn-outline-dark"
                type="submit"
                role="button"
                aria-pressed="true"
              >
                <FontAwesomeIcon
                  className="globe"
                  icon={faMagnifyingGlass}
                  size="lg"
                />
              </button>
              <input
                type="text"
                className="input"
                placeholder="Serach.."
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className=" btn-acad overflow-hidden border-less"
                onClick={handleClick}
              >
                <span className="acad">Academic</span>
                {click ? (
                  <FontAwesomeIcon
                    className="a-globe"
                    icon={faToggleOn}
                    size="lg"
                  />
                ) : (
                  <FontAwesomeIcon
                    className="globe"
                    icon={faToggleOff}
                    size="lg"
                  />
                )}
              </button>
            </div>
          </div>
          <button
            className="mt-3 search-btn btn btn-success"
            onClick={handleSearch}
          >
            Search the web
          </button>
          <div />
        </div>
      </Main>
    </>
  );
};

export default Search;
