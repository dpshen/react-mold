
import io from 'reqwest';
import cache from './cache';
import config from '../../config';

let {user_platform_domain } = config;

export default class Ajax{
    get(path, param, callback, errorCallback, option){

        let domain =  user_platform_domain;
        path = path.indexOf("http://") == -1 ? domain + path : path;
        option = Object.assign({
            type:"jsonp",
            method:"get"
        }, option || {});


        //console.log( isSameuser_platform_domain )
        param  = param || {};

        //删除明显多余的参数传递

        if( param ){
            for(let key in param){
                if( param[key] == undefined || param[key] == null  || param[key] == ""){
                    delete param[key];
                }
            }
        }

        let isResult = false
        io({
            url:path,
            //对请求进行简单的加密
            data:param,
            type:option.type,
            // dataType:option.dataType,
            // timeout:30000,
            // withCredentials:true,
            error:function(result, status){
                isResult = true;
                result = result.msg || {msg:"请求失败，请稍后再试"};
                errorCallback && errorCallback(result);
            },
            success:function(result){
                isResult = true;
                callback && callback(result)
            }

        });

        setTimeout(function(){
            if(isResult == false){
                errorCallback && errorCallback({msg:"网络超时"})
            }
        }, 15000);
    }

}

