import React from "react";

function Header(){
  var myHeader = {
      textAlign: 'center',
      fontSize: '10px',
      backgroundColor: 'grey',
      fontFamily: 'cursive',
      paddingTop: '1px',
      color: 'red'
    }
  return (
    <div style={myHeader}>
    <h1>Help Queue</h1>
      <hr/>

        </div>
  );
}

export default Header;
