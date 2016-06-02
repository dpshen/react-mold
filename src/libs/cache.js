const IS_LOCAL_STORGEl  = window.localStorage;
/**
 cache.set(key, value, expire);
 cache.get(key)
 */
const cache = {
    cacheMap:{

    },
    set:function(key, value, expire){

        if( IS_LOCAL_STORGEl ){
            try{
                return window.localStorage.setItem(key, value);
            }catch(e){
                window.localStorage.clear();
            }
        }

        return null;
    },
    get:function( key ){
        if( IS_LOCAL_STORGEl ){
            try{
                return window.localStorage.getItem( key );
            }catch(e){
                window.localStorage.clear();
            }
        }
        return null;
    },
    remove:function(key){
        if( IS_LOCAL_STORGEl ){
            try{
                return window.localStorage.removeItem( key );
            }catch(e){
                window.localStorage.clear();
            }
        }
        return null;
    },
    clear:function(){
        if( IS_LOCAL_STORGEl ){
            try{
                return window.localStorage.clear();
            }catch(e){
            }
        }
    },
    getCacheModule:function( name ){
        name = name || "default-cache";
        if( !this.cacheMap[ name ] ){
            this.cacheMap[name] = new CacheModule( name );
        }

        return this.cacheMap[name];

    },
    removeCacheModule:function(name){
        name = name || "default-cache";
        this.cacheMap[ name ] = null;
        this.remove( name );
    }
};

/**
 构造一个多页面传值的module

 var abcCache = new cache.CacheModule("abc");

 abcCache.set("key", "value", "name");

 abcCache.get("key") // {value:"value", name:"name"}

 var t = Date.now();
 md5("abdslfjalkdjfla");
 console.log(Date.now() - t)
 */
function CacheModule( name ){

    this.name = name;
    this.module = {};
    // this.init();
}

CacheModule.prototype = {

    set:function( key, value){

        key = this.getKey(key);

        this.module[key] = {
            value:value,
            name:name
        };

        //异步保存数据
        setTimeout(function(){
            cache.set(key, JSON.stringify({value:value, time:new Date()}));
        },0)

    },
    get:function(key){
        key = this.getKey(key);
        let item =  this.module[key]
        if( !item ){
            try{
                item = JSON.parse(cache.get(key))
                this.module[key] = item;
            }catch(e){
            }
        }

        return item;
    },
    remove:function(key){
        key = this.getKey(key);

        if(this.module[key]){
            delete this.module[key];
            cache.remove(key)
        }
    },
    getKey( key ){
        return this.name +"_"+key;
    },
    clear:function(){

        this.module = {};
        cache.clear();
    }
}

module.exports = cache
