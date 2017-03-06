import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router} from 'react-router'
import BaseComponent from './lib/BaseComponent'

import route from './route'

class App extends BaseComponent {
  constructor(props) {
    super(props)
    this.util.ev.on("test", (a)=> {
      this.setState({
        msg:`App on test event: ${a} \n App test in storage: ${this.storage.get("test")}`
      })
      console.log("App on test:", a)
      console.log("App test in storage:", this.storage.get("test"))
    })
  }

  render() {
    let {msg} = this.state;
    return <div>
      <span>{msg}</span>
      <span>"====================="</span>
      <Router history={browserHistory}>
        { route }
      </Router>
    </div>
  }
}

render(
  <App/>,
  document.getElementById('root')
)


