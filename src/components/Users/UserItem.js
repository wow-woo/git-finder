import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className='tac card flex-center flex-column'>
      <img
        src={user.avatar_url}
        alt='avatar'
        className='round'
        style={{ width: "60px" }}
      />
      <h3>{user.login}</h3>
      <div className='btn'>
        <Link to={`/user/${user.login}`}>more</Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
