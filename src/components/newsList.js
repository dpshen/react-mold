import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {loadNews} from '../actions'

function loadData(props) {
    const {type} = props
    props.loadNews(type)
}

export class NewsList extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type && nextProps.type !== this.props.type) {
            loadData(nextProps)
        }
    }

    eachNewsList(list){
        if (list) {
            return list.map(one => <li key={one.title}>{one.title}</li>)
        } else {
            return "loading"
        }
    }

    render() {
        const {newsRes} = this.props
        if (newsRes && newsRes.success){
            return <ul>{this.eachNewsList(newsRes.news)}</ul>;
        } else {

            return <div>loading</div>
        }
    }
}

function mapStateToProps(state, ownProps) {
    const type = ownProps.type
    const {
        entities: {news}
    } = state

    return {
        type,
        newsRes: news[type]
    }
}

export default connect(mapStateToProps, {
    loadNews
})(NewsList)


