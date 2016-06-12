import React from 'react';

export default class NewsList extends React.Component {
    constructor(props){
        super(props);
        this.list  = props.news
    }

    eachNewsList(list){
        list = list.map(one => {
            <li>{one.title}</li>
        })
        return list
    }

    render() {
        return <ul>{this.eachNewsList()}</ul>;
    }
}