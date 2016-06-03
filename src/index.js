import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory, useRouterHistory} from 'react-router'

import IndexScreen from './containers/indexScreen.js';
import NewsScreen from './containers/newsScreen.js';

import {createHashHistory} from 'history'

const history = useRouterHistory(createHashHistory)({queryKey: false});

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.pathname = props.location.pathname;
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

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Page}>
                    <IndexRedirect to="index"/>
                    <Route path="index">
                        <IndexRoute component={IndexScreen}/>
                    </Route>
                    <Route path="news">
                        <IndexRoute component={NewsScreen}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('J_Screen'));
