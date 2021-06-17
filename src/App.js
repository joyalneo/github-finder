import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await axios.get('https://api.github.com/users');
      setUsers(res.data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
};

export default App;
