/**
 * onSendBefore
 * onSendAfter
 * onSuccess
 * onComplete
 * onError
 * */
import events from 'events'

export default class AsyncData extends events.EventEmitter {

  constructor(url, param) {
    super()
    this.SEND_BEFORE = "sendBefore"
    this.COMPLETE = "complete"
    this.SUCCESS = "success"
    this.IO_ERROR = "ioError"
    this.ERROR = "error2"
    this.url = url;
    this.param = param;
    // this.data = {};
  }

  /**
   *
   * Observer
   * **/
  subscribe(observer) {
    observer.onSendBefore && this.on(this.SEND_BEFORE, observer.onSendBefore);
    observer.onComplete && this.on(this.COMPLETE, observer.onComplete);
    observer.onIOError && this.on(this.IO_ERROR, observer.onIOError);

    return this;
  }

  //返回promise对象
  fetch() {
    //emit SEND_BEFORE
    this.emit(this.SEND_BEFORE, this.url, this.param);

    this.loadData().then((result)=> {
      //完成
      this.emit(this.COMPLETE, result, this.param);
    }).catch((e)=> {
      this.emit(this.COMPLETE, e);
      //错误
      this.emit(this.IO_ERROR, e);
    });

    return this;
  }

  //请求数据
  loadData() {
    return new Promise((reslove, reject)=> {
      setTimeout(()=> {
        reslove(1)
      }, 3000);
    })
  }
}