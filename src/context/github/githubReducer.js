import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        alert: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ALERT:
      return {
        ...state,
        alert: true
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: false
      };

    default:
      return state;
  }
};
