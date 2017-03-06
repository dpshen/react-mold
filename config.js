// server 的配置
var config = {
  "API_DOMAIN": "http://fbi.yuantutech.com:3100",
  "PROTOCOL": ""
}

if (typeof window === 'object') {
  let href = window.location.href;

  if (href.indexOf("http://192.168") != -1 || href.indexOf("http://127.0") != -1 || href.indexOf("http://0.0") != -1) {

    //测试环境使用 uat 的 server
    // config = {
    //   API_DOMAIN: "http://127.0.0.1",
    // }
  }
}


export default config;
