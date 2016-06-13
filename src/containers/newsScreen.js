import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import {loadNews} from '../actions'

import  NewsList  from '../components/newsList'

// function loadData(props) {
//     const {type} = props
//     props.loadNews(type, ['type'])
// }

export default class NewsScreen extends Component {
    constructor(props) {
        // console.log("constructor", props)
        super(props)
    }

    // componentWillMount() {
    //     loadData(this.props)
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.type && nextProps.type !== this.props.type) {
    //         loadData(nextProps)
    //     }
    // }


    render() {

        // const {news} = this.props
        return (
            <div>
                <h2>News</h2>
                <Link to="/index">首页</Link>
                <NewsList type={"all"} />
            </div>
        )
    }
}

// function mapStateToProps(state, ownProps) {
//     console.log("state",state)
//     console.log("ownProps",ownProps)
//     const type = ownProps.params.type || "all"
//     const {
//         entities: {news}
//     } = state
//
//     console.log("ownProps",ownProps)
//     return {
//         type,
//         news: news[type]
//     }
// }
//
// export default connect(mapStateToProps, {
//     loadNews
// })(NewsScreen)

export default connect()(NewsScreen)
