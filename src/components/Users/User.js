import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GithubContex from "../../context/github/githubContex";

import Spinner from "../layout/Spinner";
import Repos from "../repose/Repos";

const User = ({ match }) => {
  const githubContex = useContext(GithubContex);
  const { getUser, loading, user, getUserRepos, repos } = githubContex;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <button>
        <Link to='/'>return</Link>
      </button>
      <p></p>

      <div className='card' style={{ display: "flex" }}>
        <div style={{ textAlign: "center", width: "40%" }}>
          <img
            src={user.avatar_url}
            alt='user avatar'
            className='round'
            style={{ width: "150px" }}
          />
          <div>
            <span>hireable</span>
            {user.hireable ? (
              <i className='fas fa-check' style={{ color: "green" }}></i>
            ) : (
              <i className='fas fa-times-circle' style={{ color: "red" }}></i>
            )}
          </div>
          <h1>{user.name}</h1>
          <p>{user.location}</p>
        </div>
        <div>
          {user.bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </Fragment>
          )}
          <button>
            <a href={user.html_url}>Visit Github Profile</a>
          </button>
          <ul>
            <li>Username : {user.login}</li>
          </ul>
          <ul>{user.blog !== "" ? <li>Company : {user.company}</li> : ""}</ul>
          <ul>{user.blog !== "" ? <li>Blog : {user.blog}</li> : ""}</ul>
        </div>
      </div>
      <div
        className='card'
        style={{
          display: "flex",
          flexItems: "center",
          justifyContent: "space-around"
        }}>
        <div className=''>Follwers : {user.followers}</div>
        <div className=''>Following : {user.following}</div>
        <div className=''>Public Repos : {user.public_repos}</div>
        <div className=''>Public Gists : {user.public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
