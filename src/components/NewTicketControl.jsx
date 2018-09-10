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
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisisbleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisisbleContent = <NewTicketForm />;
    }else{
      currentlyVisisbleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisisbleContent}
      </div>
    );
  }
}

export default NewTicketControl;
