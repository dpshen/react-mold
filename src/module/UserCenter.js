
//无缓存数据
import JSONPAsyncData from '../lib/JSONPAsyncData'
//优先读取缓存数据
// import JSONPCacheAsyncData from '../lib/JSONPCacheAsyncData'
import config from '../../config'

//账单list
const API_BILL_LIST = "/user-web/restapi/pay/query/billlist";
//账单详情
const API_BILL_DETAIL = "/user-web/restapi/pay/query/billdetail"

function getAPIUri( path ){
  return config.API_DOMAIN+path
}

export default {
  //获取预约详情
  cameraBlackList( id ){
    return new JSONPAsyncData(getAPIUri("/mock/test/test"), {id});
  }

}