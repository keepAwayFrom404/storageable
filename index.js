/**
 * 使用要求：
 * （1）键值命名唯一性
 * 功能：
 * （1）支持过期时间
 * （2）存储数据加密(base64加密)
 * API:
 *  (1)localStorage: set/get/remove/clear
 */

let MyStore1 = (function() {
  function decode(data) {
    return btoa(JSON.stringify(data))
  }
  function encode(data) {
    return JSON.parse(atob(data))
  }
  function set(key, value, expired = null) {
    let res = { // 存在undefined、function(){}丢失以及循环引用的问题
      value,
      expired: expired ? new Date().getTime() + expired : expired
    }

    localStorage.setItem(key, decode(res))
  }
  function get(key) {
    let local = localStorage.getItem(key)
    if(local) {
      const { value, expired } = encode(local)
      if(!expired) return value
      if(new Date().getTime() >= expired) {
        localStorage.removeItem(key)
        return null
      } else {
        return value
      }
    } else {
      return null
    }
  }
  function remove(key) {
    localStorage.removeItem(key)
  }
  function clear() {
    localStorage.clear()
  }
  return {
    get,
    set,
    remove,
    clear,
  }
})()