import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../context/github/GithubContext';

const User = ({ match, getUserRepos, repos }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light' id='redButton'>
        Back to home
      </Link>
      Hireable: {''}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2' id='userCard'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt='profile pic'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          {location && <p>Location: {location}</p>}
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn my-1' id='blackButton'>
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-danger'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default User;
