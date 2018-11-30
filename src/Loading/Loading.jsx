import React from 'react';

class Loading extends React.Component{
  render(){
    return(
      <>
        <img src={require("../loading.gif")} />
      </>
    )
  }
}

export default Loading;