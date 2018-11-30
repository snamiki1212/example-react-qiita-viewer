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
    t.setState({loading: !t.state.loading});
    const willFetchURL = this.url + "?" + `page=${t.state.nextPage}`;
    fetch(willFetchURL)
      .then(function(res){
        return res.json()
      })
      .then(function(json){
        t.setState({
          itemList: t.state.itemList.concat(json),
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
          { this.state.loading ? <Loading /> : <NextButton fetchItem={() => this.fetchItemList()}/>}
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;
