import React, {Component, PropTypes} from 'react'
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router'
import {Provider} from 'react-redux'

import IndexScreen from './indexScreen.js';
import NewsScreen from './newsScreen.js';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Header</h1>
                {
                    this.props.children
                }
                <h3>footer</h3>
            </div>
        )
    }
}

var routes = (
    <Route path="/" component={Page}>
        <IndexRedirect to="index"/>
        <Route path="index">
            <IndexRoute component={IndexScreen}/>
        </Route>
        <Route path="news">
            <IndexRoute component={NewsScreen}/>
        </Route>
    </Route>
)


export default class Root extends Component {
    render() {
        const {store, history} = this.props
        return (
            <Provider store={store}>
                <Router history={history} routes={routes}/>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}
