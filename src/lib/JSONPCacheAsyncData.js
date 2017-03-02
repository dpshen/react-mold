
import JSONPAsyncData from './JSONPAsyncData'
import util from './util'
import md5 from './md5'
import cache from './cache'


//jsonp的异步请求
//增加了一个 SUCCESS 事件
export default class JSONPCacheAsyncData extends JSONPAsyncData{

  constructor(url, param){

    let uid = util.getUID() + "";
    //缓存数据增加用户id签名，避免重复
    let key = md5(url + util.flat(param || {}) + uid);

    super(url, param);

    this.key = key;

    //如果回调正确保存数据
    this.onSuccess(( result )=>{
      try{
        cache.set(key, JSON.stringify(result));
      }catch(e){
        console.log("缓存写入错误");
      }
    })
  }
  /**
    使用 async await 语法不能获取缓存数据
  **/
  fetch(){

    return new Promise((reslove, reject)=>{
      //监听异步完成事件
      this.on(this.COMPLETE, (result)=>{
        //验证返回数据是否正确
        if( result && result.success){
          this.emit(this.SUCCESS, result);
          reslove(result)
        }else if(result && !result.success){
          this.emit(this.ERROR, result);
          reject(result)
        }else{
          console.log("请求无效，ioerror会处理")
        }
      });

      //把io错误
      this.on(this.IO_ERROR, (e)=>{
        this.emit(this.ERROR, {msg:"网络错误，请稍后再试", resultCode:404})
        reject({msg:"网络错误，请稍后再试", resultCode:404})
      })

      //发送请求之前
      this.emit(this.SEND_BEFORE, this.url, this.param);

      this.loadData().then((result)=>{
        //完成
        this.emit(this.COMPLETE, result, this.param);
      }).catch((e)=>{
        //错误
        this.emit(this.IO_ERROR, e);
      });

      try{
        //从缓存中拿数据
        let result = JSON.parse(cache.get(this.key));
        if( result ){
          // emit 数据
          this.emit(this.SUCCESS, result);
        }
      }catch(e){
        // reject(e)
        console.log("缓存错误，丢弃")
      }

    })
    
  }

}
