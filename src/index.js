import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router} from 'react-router'

import route from './route'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Router history={history}>
    { route }
  </Router>,
document.getElementById('root')
)


