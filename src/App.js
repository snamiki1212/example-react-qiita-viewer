import React, { Component } from 'react';
import ItemList from './ItemList/ItemList';
import Top from './Top/Top';
import NextButton from './NextButton/NextButton';

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
      <div className='app'>
        <Top />
        <div className="content">
          <ItemList itemList={this.state.itemList}/>
          <NextButton />
        </div>
      </div>
    );
  }
}

export default App;
