// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出

function count(start, end) {
    var timer = null
    console.log(parseInt(start,10))
    timer = setTimeout(function fn(){
        start += 1
        console.log('start',start)
        if(start > end){
            console.log('不停？')
            console.log(timer)
            clearTimeout(timer)
        }
        timer = setTimeout(fn,1000)
    },1000)
    return {
        cancel: function(){
            clearTimeout(timer)
        }
    }
}

let cancel = count.call(null,1,10)
console.log(cancel)