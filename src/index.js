import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router} from 'react-router'

import route from './route'

render(
  <Router history={browserHistory}>
    { route }
  </Router>,
document.getElementById('root')
)


