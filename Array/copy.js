// 复制一个数组，不改变原数组

let arr = [1,2,3,4]

function _copy1(arr){
    return arr.slice(0)
}

function _copy2(arr){
    return arr.concat()
}

function _copy3(arr){  // 数据类型变为字符型
    return arr.join().split(',')
}

function _copy4(arr){
    return arr.filter((it) => {
        return it
    })
}

function _copy5(arr){
    let newArr = [];
    [].push.apply(newArr,arr)
    return newArr
}

let newArr = _copy5(arr)

console.log('arr',arr)

console.log(newArr)