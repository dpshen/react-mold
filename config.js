// server 的配置
var config = {
    "user_platform_domain": "http://rap.taobao.org/mockjsData/4305"
}

let href = window.location.href;

if (href.indexOf("http://192.168") != -1 || href.indexOf("http://127.0") != -1 || href.indexOf("http://0.0") != -1) {

    //测试环境使用 uat 的 server
    config = {
        "user_platform_domain": "http://rap.taobao.org/mockjsData/4305"
    }

}
//
// if( href.indexOf("http://guahao.jkqd.gov.cn") != -1){
// 	config.user_platform_domain = "http://guahao.jkqd.gov.cn";
// }

window.config = config;

export default config;
