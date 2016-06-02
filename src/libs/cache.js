const IS_LOCAL_STORGEl  = window.localStorage;
/**
 cache.set(key, value, expire);
 cache.get(key)
 */
export default class  Cache {
    static set(key, value){

        if( IS_LOCAL_STORGEl ){
            try{
                return window.localStorage.setItem(key, value);
            }catch(e){
                window.localStorage.clear();
            }
        }

        return null;
    }
    static get( key ){
        if( IS_LOCAL_STORGEl ){
            try{
                return window.localStorage.getItem( key );
            }catch(e){
                window.localStorage.clear();
            }
        }
        return null;
    }
    static remove(key){
        if( IS_LOCAL_STORGEl ){
            try{
                return window.localStorage.removeItem( key );
            }catch(e){
                window.localStorage.clear();
            }
        }
        return null;
    }
    static clear(){
        if( IS_LOCAL_STORGEl ){
            try{
                return window.localStorage.clear();
            }catch(e){
            }
        }
    }
};

