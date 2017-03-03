import React from 'react';
import {Link} from 'react-router'

import UserCenter from '../module/UserCenter'

export default class IndexScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result:{data:"no"}
    };
    this.get();
  }

  get(){
    UserCenter.cameraBlackList(1)
      .subscribe(this)
      .fetch();
  }

  onSuccess(result) {
    this.setState({
      result
    });
  }

  render() {
    return (
      <div>
        <h2>Index</h2>
        <Link to="/react-mold/news">新闻</Link>
        <div>{this.state.result.data}</div>
      </div>
    )
  }
}