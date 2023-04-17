import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.li1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.li2}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder={props.btn}
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                {props.btn}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

//proptype

Navbar.prototypes = {
  title: PropTypes.string,
  li1: PropTypes.string,
  li2: PropTypes.string,
  btn: PropTypes.string,
};
//default prop
//if we dont pass prop then these value are used
Navbar.defaultProps = {
  title: "Default textutil",
  li1: "Default Home",
  li2: "Default About",
  btn: "Search",
};
