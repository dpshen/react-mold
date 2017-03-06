import React from 'react'
import {Link} from 'react-router'

import BaseComponent from '../lib/BaseComponent'

export default class NewsScreen extends BaseComponent {
  constructor(props) {
    super(props)
    this.state.msg = `NewsScreen test in storage: ${this.storage.get("test")}`;
    console.log("NewsScreen test in storage:", this.storage.get("test"))
  }


  render() {
    let {msg} = this.state;
    return (
      <div>
        <h2>News</h2>
        <Link to="/react-mold/index">首页</Link>
        <span>{msg}</span>
      </div>
    )
  }
}

