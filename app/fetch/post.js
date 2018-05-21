import 'whatwg-fetch'
import 'es6-promise'

//将对象拼接成key1=val1&key2=val2的字符串形式
function obj2params(obj){
  var result = '';
  var item;
  for(item in obj){
    result + ='&'+item+'='+encodeURIComponent(obj[item]);
  }

  if(result){
    result = result.slice(1)
  }
  return result
}
//发起post请求
export function post(url,params){
  var result = fetch(url,{
    method:'POST',
    credentials:'include',
    headers:{
      'Accept':'application/json,text/plain.*/*',
      'Content-Type':'application/x-www-form-urlencoded'
    },
    body:obj2params(params)
  });
  return result
}
