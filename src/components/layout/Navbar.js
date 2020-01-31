import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>
        <Link to='/' style={{ color: "#fff" }}>
          <i className={props.ico}></i>
          {props.title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Explorer",
  ico: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  ico: PropTypes.string.isRequired
};

export default Navbar;
