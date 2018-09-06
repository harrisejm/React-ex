import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var myHeader = {
    textAlign: 'center',
    fontSize: '10px',
    backgroundColor: 'grey',
    fontFamily: 'cursive',
    paddingTop: '1px',
    color: 'red'
  };
    return (
      <div>
        <h1>Help </h1>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      </div>
    );
  }

  export default Header;
