import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';

import GithubState from './components/context/github/GithubState';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlertMessageAndType] = useState(null);
  const [repos, setRepos] = useState([]);

  //Get Single Github User Repos
  const getUserRespos = async (userName) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  //Set Alert
  const setAlert = (msg, type) => {
    setAlertMessageAndType({ msg, type });

    setTimeout(() => setAlertMessageAndType(null), 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      setAlert={setAlert}
                    />
                    <Users/>
                  </Fragment>
                )}
              ></Route>
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <Fragment>
                    <User
                      {...props}
                      // getUser={getUser}
                      getUserRepos={getUserRespos}
                      // user={user}
                      repos={repos}
                      // loading={loading}
                    />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
