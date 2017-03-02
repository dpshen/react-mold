var IS_LOCAL_STORGEl = window.localStorage;
/**
 cache.set(key, value, expire);
 cache.get(key)
 */
module.exports = {
  cacheMap: {},
  set: function set(key, value, expire) {

    if (IS_LOCAL_STORGEl) {
      return window.localStorage.setItem(key, value);
    }

    return null;
  },
  get: function get(key) {
    if (IS_LOCAL_STORGEl) {
      return window.localStorage.getItem(key);
    }
    return null;
  },
  remove: function remove(key) {
    if (IS_LOCAL_STORGEl) {
      return window.localStorage.removeItem(key);
    }
    return null;
  }
};
