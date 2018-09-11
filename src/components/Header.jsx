import React from 'react';
import { Link } from 'react-router-dom';
var myHeader = {
  textAlign: 'center',
  fontSize: '10px',
  backgroundColor: 'grey',
  fontFamily: 'cursive',
  paddingTop: '1px',
  color: 'red'
};

function Header(){

  return (
    <div styles={myHeader}>
      <h1>Help </h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
