import React, { useContext } from "react";
import GithubContex from "../../context/github/githubContex";

const Alert = () => {
  const githubContex = useContext(GithubContex);
  const { alert, closeAlert } = githubContex;

  return (
    alert !== false && (
      <div style={{ backgroundColor: "#f99", padding: "7px" }}>
        <i className='fas fa-info-circle'></i> please, type at least 1 letter
        <i
          className='far fa-times-circle float-right'
          style={{ cursor: "pointer" }}
          onClick={closeAlert}></i>
      </div>
    )
  );
};

export default Alert;
