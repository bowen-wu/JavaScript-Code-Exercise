// 实现一个简易版的 Promise
// function _Promise(){
//     // 代码
// }

let promise = new _Promise((x,y) => {  // x === resolveNotify  y === rejectNotify
    console.log('执行 _Promise')
    setTimeout(() => {   // 异步模拟成功返回，所以调用 x(101) 
        x(101)  
    }, 3000)
    console.log('执行 _Promise 结束')
})
console.log('end')

promise.then((z) => {  // then 的第一个参数是 resolveFn，把 resolveFn 推入 resolveArray 
    console.log('执行 then 开始')
    console.log(z)  // 101
    console.log('执行 then 结束')
})


function _Promise(fn){
    let status = 'pending'
    let resolveArray = []
    let rejectArray = []
    function resolveNotify(){  // 过 3s 之后执行x(),即执行resolveNotify()
        status = 'resolved'
        toDoThen.apply(null,arguments)  // x(101) ==> 101 === arguments
        console.log('执行 resolveNotify')
    }
    function rejectNotify(){
        status = 'rejected'
        toDoThen.apply(null,arguments)
        console.log('执行 rejectNotify')
    }
    function toDoThen() {
        setTimeout(() => {   // 异步执行
            if (status === 'resolved') {
                resolveArray.forEach(fn => fn.apply(null, arguments))  // suguments === 101
                console.log('执行 resolveArray 中 Fn')
            } else if (status === 'rejected') {
                rejectArray.forEach(fn => fn.apply(null, arguments))
                console.log('执行 rejectArray 中 Fn')
            }
        })

    }
    fn.call(null,resolveNotify, rejectNotify)
    return {
        then(resolveFn,rejectFn) {
            resolveArray.push(resolveFn)
            console.log('resolveArray push resolveFn')
            rejectArray.push(rejectFn)
            return null   // 简化
        }
    }
}
