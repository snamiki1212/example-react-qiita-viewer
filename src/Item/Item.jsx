import React from 'react';
import './item.scss';

class Item extends React.Component{

  render(){
    return(
      <a href={this.props.url} target="_blank" className="item">
        <div className="avatorImg">{this.props.userImg}</div>
        <div className="itemText">{this.props.title}</div>
        <div className="likesCount">{this.props.likes_count}いいね</div>
      </a>
    );
  }
}

export default Item;