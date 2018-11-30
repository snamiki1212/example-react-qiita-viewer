import React, { Component } from 'react';
import ItemList from './ItemList/ItemList';
import Top from './Top/Top';
import NextButton from './NextButton/NextButton';
import Bottom from './Bottom/Bottom';
import Loading from './Loading/Loading';

class App extends Component {

  url = 'https://api.myjson.com/bins/dbctm';
  constructor(props){
    super(props);
    this.state = {
      itemList: [],
      loading: false,
    };
    this.fetchItemList()
  }

  fetchItemList(){
    let t = this;
    this.setState({loading: true});
    console.log(this.state.loading, "inner fetch1");
    fetch(this.url)
      .then(function(res){
        return res.json()
      })
      .then(function(json){
        console.log(json, "inner fetchItemList");
        console.log(t.state.loading, "inner fetch2");
        t.setState({itemList: json, loading: false});
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
          {console.log(this.state.loading, "log")}
          {! this.state.loading ? <Loading /> : <NextButton />}
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;
