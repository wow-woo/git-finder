import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContex from "../../context/github/githubContex";

const Users = () => {
  const githubContex = useContext(GithubContex);
  const { loading, users } = githubContex;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid'>
        {users.map(user => {
          return <UserItem user={user} key={user.id} />;
        })}
      </div>
    );
  }
};

export default Users;
