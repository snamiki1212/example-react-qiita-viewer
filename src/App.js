import React, { Component } from 'react';
import ItemList from './ItemList/ItemList';
import Top from './Top/Top';

class App extends Component {

  url = 'https://api.myjson.com/bins/dbctm';
  constructor(props){
    super(props);
    this.state = {
      itemList: [],
    };
    this.fetchItemList()
  }

  fetchItemList(){
    let t = this;
    fetch(this.url)
      .then(function(res){
        return res.json()
      })
      .then(function(json){
        console.log(json);
        t.setState({itemList: json});
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Top />
        <ItemList itemList={this.state.itemList}/>
      </div>
    );
  }
}

export default App;
