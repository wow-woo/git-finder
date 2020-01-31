import React, { useReducer } from "react";
import axios from "axios";
import githubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";
import githubContext from "./githubContex";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GIT_ID;
  githubClientSecret = process.env.REACT_APP_GIT_SECRET;
} else {
  githubClientId = process.env.GIT_ID;
  githubClientSecret = process.env.GIT_SECRET;
}

const GithubState = props => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false,
    alert: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //search users
  const searchUsers = async text => {
    if ({ text }.text.length === 0) {
      setAlert();
    } else {
      setLoading();

      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&
      client_id=
      ${githubClientId}&
      CLIENT_SECRET=
      ${githubClientSecret}`
      );

      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      });
    }
  };

  //get user
  const getUser = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?
      client_id=
      ${githubClientId}&
      CLIENT_SECRET=
      ${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // get repos
  const getUserRepos = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&
      client_id=
      ${githubClientId}&
      CLIENT_SECRET=
      ${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // clear users
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    });
  //   const clearUsers = () => {
  //     setUsers([]);
  //     setLoading(false);
  //   };

  //remove alert
  const closeAlert = () => dispatch({ type: REMOVE_ALERT });

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // setAlert
  const setAlert = () => dispatch({ type: SET_ALERT });

  const all = {
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    alert: state.alert,
    searchUsers,
    clearUsers,
    getUser,
    getUserRepos,
    closeAlert
  };

  return (
    <githubContext.Provider value={all}>
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
