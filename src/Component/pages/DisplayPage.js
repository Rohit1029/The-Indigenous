import React, { useEffect, useState } from "react";
import Main from "../Utility/Main";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faMagnifyingGlass,
  faAngleLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSearchParams, useNavigate } from "react-router-dom";
import ReadMoreLess from "../Utility/ReadMore";

const DisplayPage = () => {
  const [click, setClick] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [data1, setData] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();
  const [id, setid] = useState("");
  const [value, setValue] = useState("");
  const handleClick = () => {
    setClick(!click);
  };

  const getContent = async (id) => {
    try {
      const res = await axios.post(
        "https://api.gyanibooks.com/search_publication/",
        {
          keyword: `${id}`,
          limit: "25",
        }
      );
      if (res) {
        console.log(res.data);
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClear = () => {
    setData("");
  };

  useEffect(() => {
    console.log(SearchParams.get("id"));
    setid(SearchParams.get("id"));
    getContent(id);
    setValue("");
  }, []);

  return (
    <>
      <Main>
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-md-12">
              <div className="search-1">
                <div classname=" ">
                  <div className="mt-5 mb-2 d-flex d-flex justify-content-between">
                    <button className=" border-less btn-back">
                      <FontAwesomeIcon icon={faAngleLeft} size="lg" />
                      <span>Back</span>
                    </button>
                    <button
                      className=" btn-toggle border-less"
                      onClick={() => setToggle(!toggle)}
                    >
                      <span className="acad">Academic</span>
                      {toggle ? (
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
                  <div className="search-box">
                    <button
                      className="  overflow-hidden border-less mx-2 btn btn-outline-dark"
                      type="submit"
                      role="button"
                      aria-pressed="true"
                      onClick={getContent}
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
                      onChange={(e) => setid(e.target.value)}
                    />
                    <button
                      className=" btn-acad overflow-hidden border-less "
                      onClick={handleClear}
                    >
                      <FontAwesomeIcon
                        className="arrow"
                        icon={faCircleArrowRight}
                        size="lg"
                      />
                    </button>
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
          <div className="card-row row d-flex justify-content-center  mt-4">
            <h2>Academic Results</h2>
            {data1?.data?.map((c) => (
              <div className="card-1 " key={c.paperId}>
                <div className=" d-flex  col-md-12 shadow-none p-3 mb-5  rounded">
                  <div className="card  mb-3" style={{ width: " 60vw" }}>
                    <div className="card-body">
                      <h5 className="card-title">{c.title}</h5>

                      <p className="card-text">
                        <ReadMoreLess>
                          {c.abstract ? c.abstract : "No information"}
                        </ReadMoreLess>
                      </p>

                      <a href="#" className=" btn-card-right btn btn-success">
                        Eplore
                      </a>
                      <a
                        href="#"
                        className=" btn-card-left btn btn-outline-success"
                      >
                        Cite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Main>
    </>
  );
};

export default DisplayPage;
