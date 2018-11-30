import React from 'react';
import './NextButton.scss';

class NextButton extends React.Component{
  render(){
    return(
      <button onClick={this.props.fetchItem} className="nextButton">
        NEXT
      </button>
    );
  };
}

export default NextButton;