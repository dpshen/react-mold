import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import {loadNews} from '../actions'

import { NewsList } from '../components/newsList'

function loadData(props) {
    const {type} = props
    props.loadNews(type, ['type'])
}

export default class NewsScreen extends Component {
    constructor(props) {
        console.log("constructor", props)
        super(props)
    }

    componentWillMount() {
        loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type && nextProps.type !== this.props.type) {
            loadData(nextProps)
        }
    }


    render() {
        return (
            <div>
                <h2>News</h2>
                <Link to="/index">首页</Link>
                <NewsList news={this.props.news} />
            </div>
        )
    }
}

NewsScreen.propTypes = {
    type: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
    const type = ownProps.params.type || "all"
    const {
        entities: {news}
    } = state

    return {
        type,
        news: news[type]
    }
}

export default connect(mapStateToProps, {
    loadNews
})(NewsScreen)
