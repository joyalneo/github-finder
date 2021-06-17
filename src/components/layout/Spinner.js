import React, { Fragment } from 'react';
import spinnerGIF from '../../assets/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinnerGIF}
        alt='loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;