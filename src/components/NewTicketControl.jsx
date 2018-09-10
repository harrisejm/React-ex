import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';


class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  //setState method sets a new state instead of altering it.
  //The only way we can update state outside of constructor() is by using the built in
  //setStateMethod()
  // handleClick(){
  //   debugger;
  //   this.setState({formVisibleOnPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  // }

  render(){
    let currentlyVisisbleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisisbleContent = <NewTicketForm />;
    }else{
      currentlyVisisbleContent = <ConfirmationQuestions />;
    }
    return (
      <div>
        {currentlyVisisbleContent}
      </div>
    );
  }
}

export default NewTicketControl;
