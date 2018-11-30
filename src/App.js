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
      loading: true,
      nextPage: 1,
    };
    this.fetchItemList()
  }

  fetchItemList(){
    let t = this;
    console.log(this.state.loading, "inner fetch1");
    const willFetchURL = this.url + "?" + `page=${t.state.nextPage}`;
    console.log(willFetchURL, "willFetchURL");
    fetch(willFetchURL)
      .then(function(res){
        return res.json()
      })
      .then(function(json){
        console.log(json, "inner fetchItemList");
        console.log(t.state.loading, "inner fetch2");
        t.setState({
          itemList: json,
          loading: false,
          nextPage: t.state.nextPage + 1,
        });
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
          { this.state.loading ? <Loading /> : <NextButton fetchItem={() => this.fetchItemList()}/>}
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;
