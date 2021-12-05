# storageable
功能增强的浏览器本地存储插件

## localStorage
再原有storage的基础上增加过期时间与数据加密
### set(key, value, ?expired)
- key: 存储的属性名
- value: 存储的属性值
- 可选过期时间，单位ms

### get(key)
- key: 需要获取的返回值，无存储值返回null
