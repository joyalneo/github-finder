import React, { useState } from 'react';

export default function Search(props) {
  const [text, setText] = useState([]);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchUsers(text);
    setText('');
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
          id='searchButton'
        />
      </form>
      {props.showClear && (
        <button
          className='btn btn-block btn-2'
          id='clearButton'
          onClick={props.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
}
