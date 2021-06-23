import React from 'react';
import { Link } from 'react-router-dom';

const UserItems = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card text-center' id='cardID' style={cardStyle}>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '80px' }}
      />
      <h3>{login}</h3>

      <div>
        <Link
          to={`/user/${login}`}
          className='btn btn-sm my-1'
          id='cardButtonStyle'
        >
          More
        </Link>
      </div>
    </div>
  );
};

const cardStyle = {
  borderRadius: '5px',
};

export default UserItems;
