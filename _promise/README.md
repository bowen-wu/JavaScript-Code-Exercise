## 实现一个简易版的 Promise

```
function _Promise(){
    // 代码
}

let promise = new _Promise((x,y) => {
    setTimeout(() => {
        x(101)
    }, 3000);
})

promise.then((z) => {
    console.log(z)  // 101
})
```

## 分析

函数有 I/O (input + output)
Promise ==> I ==> function
Promise ==> O ==> Promise 并且有 then 方法 ==> return { then(){} }

new Promise(resolve,reject) ==> 异步调用
#### 示例：浏览器给服务器发送请求，之后浏览器继续自己的操作
如果服务器成功返回 200
```
if(status === 200){
    resolve()
}
```
如果服务器失败返回 404
```
if(status === 404){
    reject()
}
```