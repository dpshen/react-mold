import {Route, IndexRedirect} from 'react-router'
import React, {Component} from 'react';

import IndexScreen from './containers/IndexScreen'
import newsScreen from './containers/newsScreen'

export const appName = require("../package.json").name;
console.log(appName)


const route = <Route path="/">
    <IndexRedirect to={appName}/>
    <Route path={appName}>
        <IndexRedirect to="index"/>
        <Route path="index" component={IndexScreen}/>
        <Route path="news" component={newsScreen}/>
    </Route>
</Route>;

import reactRouterToArray from 'react-router-to-array';
export const pathList = reactRouterToArray(route)

export default route;
