import React, { useState } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import PropTypes from 'prop-types'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  App.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  }

  //Search GitHub users
  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  //Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length>0?true:false}/>
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
};

export default App;
