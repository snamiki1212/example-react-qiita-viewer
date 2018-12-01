import React from 'react';
import './Top.scss';

class Top extends React.Component {
  githubUrl="https://github.com/snamiki1212/qiita-viewer-with-react";
  render(){
    return(
      <div className="top">
        <p>Qiita Viewer with React</p>
        <a href={this.githubUrl} target="_blank">Github</a>
      </div>
    );
  }
}
export default Top;