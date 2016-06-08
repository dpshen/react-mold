import React from 'react'
import {Route, IndexRoute, IndexRedirect } from 'react-router'
import IndexScreen from './containers/indexScreen.js';
import NewsScreen from './containers/newsScreen.js';

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

export default (
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
