import React from "react";
import Header from "./Header"
import TicketList from "./TicketList";
// import Img from 'react-image'
// import One from '../img/One.jpg'


function App(){
  var myApp = {
      backgroundColor: 'gold',
      height: '60em'
    }
  return (
    <div style={myApp}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
