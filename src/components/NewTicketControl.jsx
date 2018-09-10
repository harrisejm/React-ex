import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick(){
    console.log('Eddie is a pretty nice guy!');
  }

  render(){
    return (
      <div>
        <p>This is the NewTicketControl component!</p>
        <strong onClick={this.handleClick}>Press Me NOW</strong>
      </div>
    );
  }
}

export default NewTicketControl;
