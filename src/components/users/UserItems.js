import React from 'react';

const UserItems = ({ user: { login, avatar_url, html_url } }) => {
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
        <a href={html_url} className='btn btn-dark btn-sm my-1' id="cardButtonStyle">
          More
        </a>
      </div>
    </div>
  );
};

const cardStyle = {
  borderRadius : '5px',
};

export default UserItems;
