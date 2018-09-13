import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';

function Error404(){
  return(
    <div>
      <p>Whoops! The page {props.location.pathname} does not exist! Go back to <Link to="/">Home</Link></p>
    </div>
  );
}
export default Error404;
