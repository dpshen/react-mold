import React from 'react';
import {Link} from 'react-router'

import UserCenter from '../module/UserCenter'
import BaseComponent from '../lib/BaseComponent'

export default class IndexScreen extends BaseComponent {
  constructor(props){
    super(props);
    this.state = {
      result:{data:"no"}
    };
    this.util.ev.on("test", (a)=>{
      this.setState({
        msg:`IndexScreen on test event: ${a} \n IndexScreen test in storage: ${this.storage.get("test")}`
      })
      console.log("IndexScreen on test:", a)
      console.log("IndexScreen test in storage:", this.storage.get("test"))
    });
  }

  componentWillMount(){
    this.get();
  }

  get(){
    UserCenter.cameraBlackList(1)
      .subscribe(this)
      .fetch();
  }

  onSuccess(result) {
    this.storage.set("test", result)
    this.setState({
      result
    });
    this.util.ev.emit('test', result)
  }

  render() {
    let {msg} = this.state;
    return (
      <div>
        <h2>Index</h2>
        <Link to="/react-mold/news">新闻</Link>
        <div>{msg}</div>
      </div>
    )
  }
}