import React from 'react';
import md5 from 'md5';
import util from './util';
import url from './url';
import config from '../../config';


export default class BaseModule extends React.Component{

    constructor(props) {

        super(props);

        this.state = Object.assign(this.state || {}, {
            unionId:29,
            corpId:261
        });

        this.state.loading = true;
        this.query = props.location ? props.location.query :  url.query();
        this.util = util;
        this.config = config
        this.md5 = md5;

        this.demands = []
    }

    get(path, param, success, error) {

        (!success||!error) && (this.state.loading = true);

        let self = this;
        // ajax 请求
        let xhr = self.io.get(path, param, (result)=> {
            !success && (self.state.loading = false);

            if( success ){

                if( result.success == true ){
                    success && success( result )
                }else if (error){
                    error && error(result)
                } else {
                    this.setState({success: false})
                    this.componentDataDidMount(result);
                }
            }else{
                this.setState(result)
                this.componentDataDidMount(result);
            }


        }, (err) => {
            !error && (self.state.loading = false);
            if (error) {
                error(err)
            } else {
                this.setState({success: false, msg:"请求失败，请稍后再试"})
                this.componentDataDidMount({success: false, msg:"请求失败，请稍后再试"})
            }
        })

    }

    componentWillUnmount(){
        //模块被卸载，取消setState方法
        // console.log(this)
        this.setState = function(){}
    }
    componentDataDidMount(){

    }

    componentDidMount() {

    }

    renderLoading(){
        return <div className="no-data">
            <img src="http://gtms04.alicdn.com/tps/i4/T1hPyYFD0kXXa679Pe-40-40.gif" width="20" />
        </div>
    }

    renderIOError(){
        return (<div onClick={this.componentDidMount.bind(this)}
                         className="no-data">{this.state.msg || "请求失败"}</div>)
    }

    renderError(){
        return <div className="no-data" onClick={this.componentDidMount.bind(this)}>数据格式不正确</div>
    }

    render() {

        if (this.state.loading) {
            return this.renderLoading()
        }

        if (this.state && this.state.success == false) {
            return this.renderIOError()
        } else {
            try {
                return this.toRender();
            } catch (e) {
                if (navigator.userAgent.indexOf("MSIE 8.0") == -1){
                    console.log(e, this);
                }
                return this.renderError()
            }
        }
    }

};
