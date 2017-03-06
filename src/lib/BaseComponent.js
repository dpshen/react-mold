
import React from 'react'
import util from './util'

let storage = new Map();

export default class BaseComponent extends React.Component {

  constructor(props){
    super(props)
    this.state= {};
    this.util = util;
    this.storage = storage;
  }

  onSendBefore(){
    this.setState({
      loading:true
    })
  }

  onComplete(){
    this.setState({
      loading:false
    })
  }

}
