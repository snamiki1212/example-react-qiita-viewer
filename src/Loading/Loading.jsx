import React from 'react';

class Loading extends React.Component{
  render(){
    return(
      <>
        <img
          src={require("../loading.gif")}
          style={
            {
              "margin": "100px 0"
            }
          }
        />
      </>
    )
  }
}

export default Loading;