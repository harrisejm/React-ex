import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';


function App(){
  // var myApp = {
  //   backgroundColor: 'red',
  //   height: '60em'
  // };
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' component={TicketList} />
         <Route path='/newticket' component={NewTicketForm} />
      </Switch>

    </div>
  );
}

export default App;
