import React from 'react';
import {Link} from 'react-router'

export default class NewsScreen extends React.Component {
    render() {
        return (
            <div>
                <h2>News</h2>
                <Link to="/index">首页</Link>
            </div>
        )
    }
}