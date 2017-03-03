import React from 'react'
import {Link} from 'react-router'

export default class NewsScreen extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <div>
                <h2>News</h2>
                <Link to="/react-mold/index">首页</Link>
            </div>
        )
    }
}

