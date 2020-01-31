import React, { useState, useContext } from "react";
import GithubContex from "../../context/github/githubContex";

const Search = () => {
  const githubContex = useContext(GithubContex);

  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    githubContex.searchUsers(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          name='text'
          placeholder='Search User...'
          className='block'
          type='text'
        />
        <input
          value='Search'
          className='block'
          type='submit'
          style={{ color: "#fff", backgroundColor: "#000" }}
        />
      </form>
      {githubContex.users.length > 0 && (
        <button
          onClick={githubContex.clearUsers}
          className='block'
          style={{ color: "#fff", backgroundColor: "#000" }}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
