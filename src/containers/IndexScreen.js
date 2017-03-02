import React from 'react';
import {Link} from 'react-router'

export default class IndexScreen extends React.Component {
    render() {
        return (
            <div>
                <h2>Index</h2>
                <Link to="/news">新闻</Link>
            </div>
        )
    }
}