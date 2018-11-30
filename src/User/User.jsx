import React from 'react';
import './User.css';

class User extends React.Component{

  render(){
    return(
      <>
        <img className="avator" src={this.props.avator} />
      </>
    );
  }
}

export default User;