import React from 'react';
import Item from '../Item/Item'
import User from '../User/User'
import './ItemList.css';

class ItemList extends React.Component{

  render(){
    let itemList = this.props.itemList
    return(
      <div className="itemList">
        {itemList.map( item =>
          // <div>
            <Item
              key={1} // TODO
              title={item.title}
              url={item.url}
              likes_count={item.likes_count}
              userImg={<User avator={item.user.profile_image_url} />}
            />
          // </div>
          )
        }
      </div>
    );
  }
}

export default ItemList;