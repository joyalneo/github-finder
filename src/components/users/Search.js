import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../context/github/GithubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter Something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search User...'
          value={text}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn btn-block'
          id='redButton'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-block btn-2'
          id='blackButton'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
